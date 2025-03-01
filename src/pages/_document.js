import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en" oncontextmenu="return false">
      <Head>
        <meta charSet="utf-8" />
        <title>BRIT Resourcing Consultancy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Staffing agency, Logistic staff provider, Housekeeping agency, Housekeeping agencies, employment agency, recruitment" />
        <meta name="keywords" content="Staffing agency, Logistic staff provider, Housekeeping agency, Housekeeping agencies, employment agency, recruitment" />
        <meta name="author" content="BRIT Resourcing" />
        <meta name="website" content="https://www.nodehive.in" />
        <meta property="og:site_name" content="BRIT Resourcing" />
        <meta property="og:title" content="NODEHIVE - Technologies" />
        <meta property="og:description" content="Staffing agency, Logistic staff provider, Housekeeping agency, Housekeeping agencies, employment agency, recruitment" />
        <meta property="og:image" content="https://ik.imagekit.io/nodehive/brit/nodehive.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content={300} />
        <meta property="og:image:height" content={300} />
        <meta property="og:url" content="https://www.nodehive.in" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
