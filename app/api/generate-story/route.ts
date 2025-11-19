import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ttmikLevels } from '@/lib/ttmikData';

// Initialize OpenAI client using your API key
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Force this route to run on the Node.js runtime
// (ensures full support for fetch, streaming, etc.)
export const runtime = 'nodejs';

// The API route for POST requests to /api/generate-story
export async function POST(req: Request) {
  try {
    // Parse the incoming JSON body from the client
    const body = await req.json();

    // Extract the level and lesson selected by the user
    const { levelId, lessonId } = body as {
      levelId: string;
      lessonId: string;
    };

    // If either is missing, return a 400 Bad Request error
    if (!levelId || !lessonId) {
      return NextResponse.json(
        { error: 'Missing levelId or lessonId' },
        { status: 400 }
      );
    }

    // Try to find the matching level object by ID
    const level = ttmikLevels.find(
      (l) => l.id === levelId
    );

    // And then find the selected lesson inside that level
    const lesson = level?.lessons.find(
      (ls) => ls.id === lessonId
    );

    // If the combination is invalid, respond with error
    if (!level || !lesson) {
      return NextResponse.json(
        {
          error:
            'Invalid TTMIK level/lesson selection',
        },
        { status: 400 }
      );
    }

    // Use model from env if set, otherwise default to GPT-4.1-mini
    const model =
      process.env.OPENAI_MODEL || 'gpt-4.1-mini';

    // Call OpenAI with a system + user prompt
    const completion =
      await client.chat.completions.create({
        model,
        // We want the model to return **strict JSON**
        response_format: { type: 'json_object' },
        messages: [
          {
            // System prompt defines HOW the AI should behave
            role: 'system',
            content: `
            You are a kind Korean teacher who writes short, level-appropriate stories 
            based on TTMIK-style grammar lessons.

            ALWAYS respond with STRICT JSON in this shape:

            {
              "koreanStory": "…",
              "englishTranslation": "…",
              "grammarSummary": "…",
              "wordBank": [
                { "word": "…", "reading": "…", "meaning": "…", "note": "…" }
              ]
            }

            Rules:
            - Use simple, natural Korean appropriate for the given level.
            - Use the specified grammar point multiple times in the story.
            - 1–2 short paragraphs (6–10 sentences total).
            - Word bank: 5–10 key/new words from the story that learners may not know.
          `,
          },
          {
            // User prompt provides lesson-specific details
            role: 'user',
            content: `
            TTMIK info:
            - Level: ${level.name}
            - Lesson title: ${lesson.title}
            - Grammar point: ${lesson.grammarPoint}
            - Description: ${lesson.description}

            Task:
            Create a short story (1–2 paragraphs) in Korean that focuses on this grammar.
            Return JSON only.
          `,
          },
        ],
      });

    // Extract the assistant message returned from OpenAI
    const message =
      completion.choices[0]?.message;
    const content = message?.content;

    // If OpenAI didn't return anything, treat it as an error
    if (!content) {
      throw new Error(
        'No content returned from OpenAI'
      );
    }

    // Since the model outputs JSON, parse it
    const data = JSON.parse(content);

    // Send the parsed JSON back to the client
    return NextResponse.json(data);
  } catch (err: any) {
    // Log in server terminal for debugging
    console.error('Story generation error:', err);

    // Always return a safe error message to the client
    return NextResponse.json(
      { error: 'Failed to generate story' },
      { status: 500 }
    );
  }
}
