import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
display: flex;
width: 100%;
padding: 1rem 2rem;
font-size: 2.2rem;
margin-bottom: 2rem;
`

const StyledNav = styled.nav`
margin-left: auto;

span {
  margin-left: 2rem;
}
`

const Header = () => {
  return (
    <StyledHeader>
      <div>File Convertor</div>
      <StyledNav>
        <span>Home</span>
        <span>Github</span>
        <span>About</span>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header