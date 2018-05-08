import React from 'react'
import styled from 'styled-components'
import { Header } from './components'

const Container = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 15px rgba(0,0,0,0.15);
  height: 450px;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 600px;
`

const App = () => (
  <Container>
    <Header />
  </Container>
)

export default App
