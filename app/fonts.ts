// app/fonts.ts
import {
  Fredoka,
  Quicksand,
  Noto_Sans_KR,
} from 'next/font/google';
import localFont from 'next/font/local';

export const notoSans = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans',
});

export const suit = localFont({
  src: '../public/fonts/SUIT-Variable.ttf',
  weight: '100 900',
  variable: '--font-suit',
});

export const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
