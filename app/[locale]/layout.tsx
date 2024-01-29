import NextIntlProvider from "./NextIntlClientProvider";
import "./globals.css";
import { Providers } from "./providers";
import { notFound } from "next/navigation";

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  
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
