import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://kit.fontawesome.com/e79e73d12c.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
