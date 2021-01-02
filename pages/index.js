import Head from 'next/head'
import "../styles/main.css"

const Logo = () => (
  <>
    <img src="/logo.png" width={150} className="p-2 hidden md:inline-block"/>
    <img src="/codar.png" width={50} className="p-2 md:hidden"/>
  </>
)

const Menu = () => (
  <div className="p-2 flex items-center">
    <a href="http://github.com/codarme" target="_blank">
      github
    </a>

    <a href="http://github.com/codarme" target="_blank">
      instagrem
    </a>

    <a href="http://github.com/codarme" target="_blank">
      youtube
    </a>
  </div>
)

const Banner = () => (
  <div className="container max-w-5xl m-auto flex=1 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
    <span className="text-gray">Criamos a CadarMe para te ajudar a</span>
    <div className="uppercase text-4xl font-extrabold leadins-snug">
      Desenvolver <span className="text-green">Software</span> de verdade
    </div>
    <span className="text-gray">e se tornar um desemvolvedor acima da média</span>
  </div>
)

const Header = () => (
  <div className="p-2 container max-w-5xl m-auto flex justify-between items-center">
    <Logo />
    <Menu />
  </div>
)

const Home = () => (
  <div className="flex flex-col flex-1">
  <Head>
    <title>CodaMe - Tailwind - Next.Js</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <Header />
  <Banner />
  </div>
)
  export default Home
