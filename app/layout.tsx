import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '貝氏直覺室｜貝氏統計入門',
  description: '用互動圖像與生活案例，理解先驗機率、後驗更新，以及貝氏與頻率學派的差異。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
