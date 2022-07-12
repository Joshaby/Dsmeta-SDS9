import styled from "styled-components"

import logo from '../assets/img/logo.svg'

const Container = styled.header`
  background: linear-gradient(180deg, #102347 0%, #181818 100%);
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 235px;
  }
  h1 {
    margin-top: 15px;
  }
  p {
    font-size: 14px;
    font-weight: 300;
  }
`

export function Header() {
  return (
    <Container>
      <img src={logo} alt="DSMeta"/>
      <h1>DSMeta</h1>
      <p>
        Desenvolvidor por
        <a href="https://github.com/Joshaby"> Joshaby</a>
      </p>
    </Container>
  )
}