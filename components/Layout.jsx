import React from 'react';
import Head from 'next/head';

const Layout = () => {
  return (
    <div classnName="layout">
      <Head>
        <title>KKey Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
    </div>
  )
}

export default Layout