
import { Nunito } from 'next/font/google'
import {createGlobalCss} from '@/styles/globals'

import type { AppProps } from 'next/app'

const nunito = Nunito({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  createGlobalCss()
  return (
    <div className={nunito.className}>
      <Component {...pageProps} />
    </div>
  )
  
}
