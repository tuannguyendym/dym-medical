import NextIntlProvider from "./NextIntlClientProvider";
import "./globals.css";
import { Providers } from "./providers";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ locale: "vi" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlProvider
          locale={params.locale}
          messages={messages}
          timeZone="Asia/Ho_Chi_Minh"
          now={new Date()}
        >
          <Providers>{children}</Providers>
        </NextIntlProvider>
      </body>
    </html>
  );
}
