import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import Scene from "../Scene2"


const StyledSection = styled.section`
  min-height: 440px;
  height: 60vh;
  position: relative;
  z-index: 0;
  text-align: center;
  color: #0672DD;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 640px) {
    height: 75vh;
  }
`

const StyledDiv = styled.div`
  position: relative;
  z-index: 0;
  pointer-events: none;
`

const StyledH1 = styled.h1`
  font-family: 'Verlag';
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 2em;
  margin: 2rem 0 0 0;
  line-height: 1;
`

const StyledH2 = styled.h2`
  font-weight: 700;
  margin: 0;
  line-height: 1;
`

const StyledH4 = styled.h4`
  margin-top: .5rem;
`

const StyledHint = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.85em;
  font-weight: 500;
`

const HeroSection = () => {
  return (
    <Scene/>
  )

    // <StyledSection>
    //   <Scene/>
    //   <StyledDiv>
    //     <StyledH1>Myndy</StyledH1>
    //     <StyledH2>mental fitness for womxn</StyledH2>
    //     <StyledH4>Focused heart,<br/>Strong mind</StyledH4>
    //   </StyledDiv>
    //   <StyledHint><h4>Play ↑ here</h4></StyledHint>
    // </StyledSection>

  
}

export default HeroSection;