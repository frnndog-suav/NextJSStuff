import React from "react";

export default function MyApp({ Component, pageProps }) {
    return (
        <React.Fragment>
            <style>
                {
                    `
                    * {
                        font-family: sans-serif
                    }
                    `
                }
            </style>
            <Component {...pageProps} />
        </React.Fragment>
    );
}
