import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log('my app')
  return <Component {...pageProps} />
}
