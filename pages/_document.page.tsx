/* eslint-disable @next/next/google-font-display */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html style={{height: '100%'}}>
            <Head>
                <link
                     href="https://fonts.googleapis.com/css2?family=Agdasima:wght@400;700&display=swap"
                     rel="stylesheet"
                />
                
            </Head>
            <body style={{height: '100%'}}>
            <Main />
            <NextScript />
            </body>

        </Html>
    )
}