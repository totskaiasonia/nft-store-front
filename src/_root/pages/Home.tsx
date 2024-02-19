import { Store } from "../../sections";
import { Intro, StartSteps, TopNft } from "../../sections";

const Home = () => {
  return (
    <>
      <div className="layout">
        <Intro/>
        <TopNft/>
      </div>
      <StartSteps/>
      <Store/>
    </>
  )
}

export default Home