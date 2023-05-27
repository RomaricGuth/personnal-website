import { Roboto, Bree_Serif, Lobster_Two } from 'next/font/google';

export const font_body = Roboto({
  subsets: ['latin'],
  variable: '--font-body',
  weight: '400',
  display: 'swap',
});

export const font_headings = Bree_Serif({
  subsets: ['latin'],
  variable: '--font-headings',
  weight: '400',
  display: 'swap',
});

export const font_style = Lobster_Two({
  subsets: ['latin'],
  variable: '--font-cursive',
  weight: '400',
  display: 'swap',
})
