import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preload" href="/fonts/Gilroy-Regular.ttf" as="font" crossOrigin="" />
                    <link rel="preload" href="/fonts/Gilroy-SemiBold.ttf" as="font" crossOrigin="" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
