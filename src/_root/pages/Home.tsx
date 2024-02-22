import { Intro, StartSteps, TopNft, PupularCollections, Store, WhatPeopleSay } from "../../sections";

const Home = () => {
  return (
    <>
      <div className="layout">
        <Intro/>
        <TopNft/>
      </div>
      <StartSteps/>
      <Store/>
      <PupularCollections/>
      <WhatPeopleSay/>
    </>
  )
}

export default Home