import type { Metadata } from 'next';
import './globals.css';

const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ??
  'https://hamano-daidokoro-take.s-nishita.chatgpt.site';
const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: 'ハマの台所 タケ｜弘明寺の海鮮とジャンルレス居酒屋',
  description:
    '弘明寺駅徒歩約7分。店主が目利きした海鮮と、その日のおすすめを自由な一皿に仕立てるジャンルレス居酒屋。ランチ・ディナー営業。',
  openGraph: {
    title: 'ハマの台所 タケ',
    description: '旨いものは、ジャンルをこえる。弘明寺の海鮮とジャンルレス居酒屋。',
    type: 'website',
    locale: 'ja_JP',
    images: [{ url: `${assetBasePath}/og.png`, width: 1672, height: 941, alt: 'ハマの台所 タケ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ハマの台所 タケ',
    description: '旨いものは、ジャンルをこえる。弘明寺の海鮮とジャンルレス居酒屋。',
    images: [`${assetBasePath}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
