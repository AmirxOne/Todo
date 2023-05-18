import "@/styles/globals.css";
// --> components
import Layout from "@/components/layout/Layout";


export default function App({ Component, pageProps }) {
  console.log('my app')
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
