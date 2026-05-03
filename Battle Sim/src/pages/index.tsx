import Head from 'next/head'
import React from 'react'
import RGPD from '../components/utils/rgpd'
import Simulation from '../components/simulation/simulation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Battle Sim</title>
        <meta name="description" content="Build balanced encounters!" />
      </Head>

      <main>
        <Simulation />
        <RGPD />
      </main>
    </>
  )
}
