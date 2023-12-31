import '@/styles/globals.css'
import '../styles/App.scss'
import { NextUIProvider } from '@nextui-org/react'
export default function App({ Component, pageProps }) {
  return <NextUIProvider>
    <Component {...pageProps} />
  </NextUIProvider>
}
