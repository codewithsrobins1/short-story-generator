'use client';

import { useState } from 'react';

import {
  Lesson,
  Level,
  ttmikLevels,
} from '@/lib/ttmikData';

import { fredoka, quicksand } from './fonts';

type WordBankItem = {
  word: string;
  reading: string;
  meaning: string;
  note?: string;
};

type StoryResult = {
  koreanStory: string;
  englishTranslation: string;
  grammarSummary: string;
  wordBank: WordBankItem[];
};

export default function HomePage() {
  const [selectedLevelId, setSelectedLevelId] =
    useState(ttmikLevels[0]?.id);
  const [selectedLessonId, setSelectedLessonId] =
    useState(ttmikLevels[0]?.lessons[0]?.id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<
    string | null
  >(null);
  const [story, setStory] =
    useState<StoryResult | null>(null);
  const [showEnglish, setShowEnglish] =
    useState(false);

  const selectedLevel: Level | undefined =
    ttmikLevels.find(
      (l) => l.id === selectedLevelId
    );
  const selectedLesson: Lesson | undefined =
    selectedLevel?.lessons.find(
      (ls) => ls.id === selectedLessonId
    );

  const handleGenerate = async () => {
    if (!selectedLevelId || !selectedLessonId)
      return;

    setLoading(true);
    setError(null);
    setShowEnglish(false);

    try {
      const res = await fetch(
        '/api/generate-story',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            levelId: selectedLevelId,
            lessonId: selectedLessonId,
          }),
        }
      );

      if (!res.ok) {
        const data = await res
          .json()
          .catch(() => ({}));
        throw new Error(
          data.error || 'Request failed'
        );
      }

      const data =
        (await res.json()) as StoryResult;
      setStory(data);
    } catch (err: any) {
      console.error(err);
      setError(
        err.message || 'Something went wrong'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLevelChange = (id: string) => {
    setSelectedLevelId(id);
    const level = ttmikLevels.find(
      (l) => l.id === id
    );
    const firstLesson = level?.lessons[0];
    if (firstLesson)
      setSelectedLessonId(firstLesson.id);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-100 via-amber-50 to-white text-zinc-900">
      {/* Header */}
      <header className="border-b border-orange-300 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 shadow-md">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1
              className={`${fredoka.className} text-3xl font-extrabold tracking-tight text-white drop-shadow`}
            >
              Korean Story Studio
            </h1>
            <p className="mt-1 text-xs text-orange-50">
              TTMIK-style stories + OpenAI ✨
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <select
              className={`${quicksand.className} rounded-xl border border-orange-300 bg-white px-3 py-2 text-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400`}
              value={selectedLevelId}
              onChange={(e) =>
                handleLevelChange(e.target.value)
              }
            >
              {ttmikLevels.map((level) => (
                <option
                  key={level.id}
                  value={level.id}
                >
                  {level.name}
                </option>
              ))}
            </select>

            <select
              className={`${quicksand.className} rounded-xl border border-orange-300 bg-white px-3 py-2 text-xs shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400`}
              value={selectedLessonId}
              onChange={(e) =>
                setSelectedLessonId(
                  e.target.value
                )
              }
            >
              {selectedLevel?.lessons.map(
                (lesson) => (
                  <option
                    key={lesson.id}
                    value={lesson.id}
                  >
                    {lesson.title}
                  </option>
                )
              )}
            </select>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className={`${fredoka.className} rounded-2xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60`}
            >
              {loading
                ? 'Generating...'
                : 'Generate Story 📖'}
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[2fr,1fr]">
        {/* Grammar Focus */}
        <section className="space-y-4">
          <section className="rounded-3xl border border-orange-300 bg-white/90 p-4 shadow-sm">
            <h2
              className={`${fredoka.className} text-xl font-bold text-orange-700`}
            >
              Grammar Focus 📚
            </h2>
            <p className="mt-1 text-[14px] uppercase tracking-wide text-orange-500">
              {selectedLevel?.name}
            </p>

            <h3
              className={`${quicksand.className} mt-2 text-sm font-semibold text-zinc-800`}
            >
              {selectedLesson?.title ??
                'Select a lesson'}
            </h3>

            <p
              className={`${quicksand.className} mt-2 text-sm text-zinc-700`}
            >
              {selectedLesson?.description ??
                'Pick a TTMIK level and lesson to see a short explanation here.'}
            </p>

            {story && (
              <>
                <div className="mt-3 h-px bg-gradient-to-r from-orange-200 via-amber-200 to-transparent" />
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-orange-500">
                  In this story…
                </p>
                <p
                  className={`${quicksand.className} mt-1 text-sm text-zinc-700 whitespace-pre-line`}
                >
                  {story.grammarSummary}
                </p>
              </>
            )}
          </section>

          {error && (
            <section className="rounded-2xl border border-red-200 bg-red-50 p-3 text-xs text-red-800">
              {error}
            </section>
          )}
        </section>

        {/* Korean & English cards */}
        <div className="space-y-4">
          {/* Korean Card */}
          <section className="rounded-3xl border border-orange-300 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2
                className={`${fredoka.className} text-xl font-bold text-orange-700`}
              >
                한국어 이야기 ✏️
              </h2>
              {story && (
                <span className="rounded-full bg-orange-100 px-3 py-1 text-[12px] font-semibold text-orange-700">
                  {selectedLesson?.grammarPoint}
                </span>
              )}
            </div>
            <div className="mt-5 min-h-[160px] whitespace-pre-line text-[17px] leading-[1.9] font-[500] text-zinc-800">
              {story ? (
                <p>{story.koreanStory}</p>
              ) : (
                <p className="text-zinc-400">
                  Pick a level &amp; lesson, then
                  click
                  <span className="font-semibold">
                    {' '}
                    Generate Story
                  </span>
                  .
                </p>
              )}
            </div>
          </section>

          {/* English Card */}
          <section className="rounded-3xl border border-violet-300 bg-[#faf8ff] p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2
                className={`${fredoka.className} text-[20px] font-bold text-violet-700`}
              >
                English Translation 💬
              </h2>

              <button
                onClick={() =>
                  setShowEnglish((v) => !v)
                }
                disabled={!story}
                className={`${quicksand.className} rounded-full border border-violet-300 bg-white px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm hover:bg-violet-50 transition disabled:cursor-not-allowed disabled:opacity-60`}
              >
                {showEnglish
                  ? 'Hide Translation'
                  : 'Show Translation'}
              </button>
            </div>

            <div
              className={`${quicksand.className} mt-5 min-h-[140px] text-[17px] leading-[1.9] text-zinc-800`}
            >
              {!story && (
                <p className="text-zinc-400">
                  The English translation will
                  appear here once a story is
                  generated.
                </p>
              )}

              {story && !showEnglish && (
                <p className="text-zinc-400 italic">
                  Translation hidden. Click{' '}
                  <span className="font-semibold text-violet-600">
                    Show Translation
                  </span>{' '}
                  when you're ready to check your
                  understanding.
                </p>
              )}

              {story && showEnglish && (
                <p className="whitespace-pre-line animate-fadeIn">
                  {story.englishTranslation}
                </p>
              )}
            </div>
          </section>

          {/* Word Bank */}
          <section className="rounded-3xl border border-emerald-200 bg-emerald-50/80 p-5 shadow-sm">
            <div className="mb-2 flex items-center justify-between">
              <h2
                className={`${fredoka.className} text-lg font-bold text-emerald-800`}
              >
                Word Bank 🌱
              </h2>
              <span
                className={`${quicksand.className} text-sm text-emerald-700`}
              >
                New / key words from this story
              </span>
            </div>

            {story &&
            story.wordBank?.length > 0 ? (
              <div className="grid gap-2 sm:grid-cols-2">
                {story.wordBank.map(
                  (item, idx) => (
                    <div
                      key={`${item.word}-${idx}`}
                      className="rounded-2xl bg-white px-3 py-2 text-sm shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-emerald-900">
                          {item.word}
                        </span>
                        {item.reading && (
                          <span className="text-[10px] text-emerald-700">
                            {item.reading}
                          </span>
                        )}
                      </div>
                      <p
                        className={`${quicksand.className} mt-1 text-[11px] text-emerald-800`}
                      >
                        {item.meaning}
                        {item.note
                          ? ` — ${item.note}`
                          : ''}
                      </p>
                    </div>
                  )
                )}
              </div>
            ) : (
              <p
                className={`${quicksand.className} text-sm text-emerald-700`}
              >
                After generating a story,
                you&apos;ll see a mini vocabulary
                list here with helpful notes.
              </p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
