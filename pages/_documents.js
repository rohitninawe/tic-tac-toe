import Document, { Head, Main, NextScript, Html } from 'next/document';

export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" type="image/x-icon" href="//images/branding/googleg/1x/googleg_standard_color_128dp.png" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}