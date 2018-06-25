import React from "react"
import styles from "./main.css"
import styled from "react-emotion"
import { css } from "emotion"

const Fancy = styled("h1")`
  color: ${props => (props.wild ? "hotpink" : "gold")}
`

const red = "#f00"

const className = css`
  color: ${red};
  font-size: 13em
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  climb() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    const isWild = this.state.count % 2 === 0
    return (
      <div className={styles.counter} onClick={this.climb.bind(this)}>
        <Fancy wild={isWild}>{this.state.count}</Fancy>
      </div>
    )
  }
}
