import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Convertor from './components/Convertor'
const StyledApp = styled.div`
font-size: 1.6rem;
min-height: 100vh;
display: flex;
flex-direction: column;
flex: 1 1 0%;
width: 100%;
align-items: center;


`

const StyledCenterContainer = styled.div`

`
const App = () => {

  return (
    <StyledApp>
      <Header />
      <StyledCenterContainer>
        <Convertor />
      </StyledCenterContainer>
      <Footer />
    </StyledApp>
  )
}

export default App
