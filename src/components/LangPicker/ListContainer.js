// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import ListItem from './ListItem'

const StyledListContainer = styled.ul`
  background-color: #fff;
  height: calc(100vh - 30px);
  list-style: none;
  min-height: ${props => props.open ? '100%' : '0'};
  overflow-y: scroll;
  padding: 0;
  position: absolute;
  transition: min-height 400ms cubic-bezier(.5,-0.25,.5,1.25);
  top: 100%;
  right: 0;
  width: 100vw;

  @media (min-width: 768px) {
    box-shadow: 0 5px 5px rgba(0,0,0,0.1);
    height: 0%;
    left: ${props => props.offRight ? 'auto' : '0%'};
    min-height: ${props => props.open ? '290px' : '0'};
    right: ${props => props.offRight ? '0%' : 'auto'};
    width: 500px;
  }
`

const ListHeader = styled.li`
  background-color: #e7eef6;
  border-bottom: 1px solid #e2e2e3;
  color: #4a4c4e;
  padding: 10px;
`

class ListContainer extends Component {

  constructor(props) {
    super(props)
    this._isMenuOver = this._isMenuOver.bind(this)
    this.state = {
      offRight: false
    }
  }

  componentDidMount() {
    this._isMenuOver()
  }

  render() {

    return(
      <StyledListContainer innerRef={(i) => { this.listContainer = i }} offRight={this.state.offRight} open={this.props.open}>

        <ListHeader>Popular Languages</ListHeader>
        {
          this.props.data.popular.map((language, i) => (
            <ListItem key={i} onClick={this._clickItem} flag={language.flag} name={language.name} />
          ))
        }

        <ListHeader>Other Languages</ListHeader>
        {
          this.props.data.other.map((language, i) => (
            <ListItem key={i} onClick={this._clickItem} flag={language.flag} name={language.name} />
          ))
        }

      </StyledListContainer>
    )
  }

  _isMenuOver() {
    if (this.listContainer.getBoundingClientRect().right > window.innerWidth) {
      this.setState({offRight: true})
    }
    else {
      this.setState({offRight: false})
    }
  }
}

export default ListContainer
