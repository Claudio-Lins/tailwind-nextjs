import Head from 'next/head'
import "../styles/main.css"


const Header = () => (
  <div>
    <img src="/logo.png" width={150} className="p-2"/>
  </div>
)

const Home = () => (
  <div className="container">
  <Head>
    <title>CodaMe - Tailwind - Next.Js</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <Header />
  </div>
)
  export default Home
