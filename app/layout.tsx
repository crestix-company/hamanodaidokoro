import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://hamano-daidokoro-take.s-nishita.chatgpt.site'),
  title: 'ハマの台所 タケ｜弘明寺の海鮮とジャンルレス居酒屋',
  description:
    '弘明寺駅徒歩約7分。店主が目利きした海鮮と、その日のおすすめを自由な一皿に仕立てるジャンルレス居酒屋。ランチ・ディナー営業。',
  openGraph: {
    title: 'ハマの台所 タケ',
    description: '旨いものは、ジャンルをこえる。弘明寺の海鮮とジャンルレス居酒屋。',
    type: 'website',
    locale: 'ja_JP',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: 'ハマの台所 タケ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ハマの台所 タケ',
    description: '旨いものは、ジャンルをこえる。弘明寺の海鮮とジャンルレス居酒屋。',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
