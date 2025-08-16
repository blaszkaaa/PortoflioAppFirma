import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lukas.biz.pl - Profesjonalne usługi budowlane</title>
        <meta name="description" content="Firma budowlana działająca od 2008 roku. Elewacje wentylowane, obudowy hal, obróbki blacharskie, domki modułowe." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header transparent={true} />
        
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
