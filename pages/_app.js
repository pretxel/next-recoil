import { RecoilRoot } from 'recoil'
import { Analytics } from '@vercel/analytics/react';


export default function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <Component {...pageProps} />
        </RecoilRoot>
        <Analytics />
    )
}