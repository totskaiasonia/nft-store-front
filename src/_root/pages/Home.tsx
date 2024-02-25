import { SetStateAction, useState } from "react";
import { Intro, StartSteps, TopNft, PupularCollections, Store, WhatPeopleSay, SignUp, LogIn } from "../../sections";

const Home = () => {

  const [showSignUp, setShowSignUp] = useState(true);

  const toogleForm = (value: SetStateAction<boolean>) => {
    setShowSignUp(value);
  }
  
  return (
    <>
      <div className="layout">
        <Intro/>
        <TopNft/>
      </div>
      <div className="top-space-wrapper">
        <StartSteps/>
      </div>
      <div className="top-space-wrapper">
        <Store/>
      </div>
      <div className="top-space-wrapper">
        <PupularCollections/>
      </div>
      <div className="top-space-wrapper">
        <WhatPeopleSay/>
      </div>
      <div className="auth-wrapper">
        {
          showSignUp
          ?
          <SignUp toogleFormHandler={toogleForm}/>
          :
          <LogIn toogleFormHandler={toogleForm}/>
        }
      </div>
    </>
  )
}

export default Home