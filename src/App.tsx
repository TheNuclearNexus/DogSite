import React, { useState } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import styled from 'styled-components'
import CurrencyDisplay from './components/CurrencyDisplay';
import Dog from './pages/Dog';
import Speech from './pages/Speech';
import Store from './pages/Store';


const AppContainer = styled.div`
  font-family: Segoe UI;
  height: 100%;
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  hr {
    color: white;
    width: 100%;
  }
`


function App(props: any) { //Bitches and Whores

  return (
    <AppContainer>
      <BrowserRouter>
        <div style={{display:'flex', alignItems:'center', gap: 8}}>
          <h1 style={{flexGrow:1}}>Welcome to Hell</h1>
          <CurrencyDisplay style={{flexGrow:1}}/>
          <Link to="/">Dog</Link>
          <Link to="/speech">Speech</Link>
          <Link to="/store">Store</Link>
        </div>

        <Route exact path="/"><Dog/></Route>
        <Route path="/speech"><Speech/></Route>
        <Route path="/store"><Store/></Route>
      </BrowserRouter>

    </AppContainer>
  );
}

export default App;
