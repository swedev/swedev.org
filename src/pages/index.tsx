import type { NextPage } from 'next';
import Head from 'next/head';
import SweDevLogo from '../components/SweDevLogo';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>SWEDEV</title>
        <meta name="description" content="A community for Swedish software devel­opers and other IT prof­ess­ionals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">

        <div className="lg:w-1/2 sm:w-3/4">
          <div className="md:w-1/2 w-3/4">
            <SweDevLogo />
          </div>
          <p className="description">
            Swedev is a community for Swedish software devel­opers, UI des­igners, system archi­tects,
            project mana­gers, IT secur­ity, DevOps and other IT prof­ess­ionals. Our goal is for swedev
            to be a natural point of entry for commun­icating with the Swedish software commun­ity.
            We also believe in prom­oting the use of open data and open source code, speci­fically but
            not exclu­sively within Swedish government.
          </p>
          <p className="description">
            So come join the conver­sation on <a href="https://reddit.com/r/swedev">Reddit</a>,
            contri­bute to our proj­ects on <a href="https://github.com/swedev">GitHub</a>,
            just say hello on <a href="https://twitter.com/swedevorg">Twitter</a> or email
            hello@swedev.org.
          </p>
        </div>

      </main>
    </div>
  );
};

export default Home;
