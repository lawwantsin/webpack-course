import React from "react"
import BioText from "../../data/bio"
import styled, { injectGlobal } from "styled-components"

injectGlobal`
  body {
    margin: 0;
    background-color: #444;
    font-family: Helvetica;
  }
`

const Profile = styled.div`
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-flow: column;
  img {
    border-radius: 100%;
    border: 5px;
    width: 300px;
    box-shadow: 0 0 20px black;
  }

  h1 {
    font-size: 5em;
    font-family: sans-serif;
    color: white;
    text-shadow: 0 0 20px black;
    text-align: center;
  }
`

const Content = styled.div`
  background-color: #ffffe0;
  box-shadow: 0 0 20px black;
  font-family: sans-serif;
  line-height: 1.5em;
  max-width: 720px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Profile>
        <img src={require("../images/link.jpg")} />
        <h1>Link's Journal</h1>
        <Content>{BioText}</Content>
      </Profile>
    )
  }
}
