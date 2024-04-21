import type { Metadata } from "next";
import Script from 'next/script'

export const metadata: Metadata = {
  title: "Track and Forward",
  description: "Track and Forward",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const GA_TRACKING_ID = process.env.GA_TRACKING_ID as string

  return (
		<html lang="en">
			<Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
        }}
      />
      <body>{children}</body>
    </html>
  );
}
