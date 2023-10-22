import React, { useState } from 'react'
import styled from "styled-components";
import StartGame from './Components/StartGame';
import GamePlay from './Components/GamePlay';


const App = () => {

  const [isGameStarted, setisGameStarted] = useState(false);
  
  const toggleGamePlay = () => {
    setisGameStarted((prev) => !prev);
  };

  return (
    <>
    { isGameStarted ? <GamePlay /> : <StartGame 
      toggle={toggleGamePlay}
    />}
    </>
  )
}

export default App