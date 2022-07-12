import styled from "styled-components"
import { Header } from "./components/Header"
import { SalesCard } from "./components/SalesCard"

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`

const Sales = styled.section`
  padding: 40px 10px;
`

export function App() {
  return (
    <>
      <Header />
      <main>
        <Sales>
          <Container>
            <SalesCard />
          </Container>
        </Sales>
      </main>
    </>
  )
}
