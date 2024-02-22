import { Intro, StartSteps, TopNft, PupularCollections, Store } from "../../sections";

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
    </>
  )
}

export default Home