import { Intro, StartSteps, TopNft } from "../../sections";

const Home = () => {
  return (
    <>
      <div className="layout">
        <Intro/>
        <TopNft/>
      </div>
      <StartSteps/>
    </>
  )
}

export default Home