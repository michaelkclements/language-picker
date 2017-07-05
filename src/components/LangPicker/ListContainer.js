// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import ListItem from './ListItem'

const StyledListContainer = styled.ul`
  background-color: #fff;
  list-style: none;
  height: 0%;
  min-height: ${props => props.open ? 'calc(100vh - 30px)' : '0'};
  overflow-y: scroll;
  padding: 0;
  position: fixed;
  transition: all 400ms cubic-bezier(.5,-0.25,.5,1.25) ${props => props.open ? '100ms' : '0s'};
  top: 50px;
  right: 0;
  width: 100vw;

  &:before {
    background-color: #4787FF;
    content: '';
    height: ${props => props.open ? '4px' : '0'};
    position: absolute;
    right: 0;
    top: 0;
    transition: all 300ms ease;
    width: 100%;
  }

  @media (min-width: 768px) {
    box-shadow: 0 5px 5px rgba(0,0,0,0.1);
    left: ${props => props.offRight ? 'auto' : '0%'};
    min-height: ${props => props.open ? '290px' : '0'};
    position: absolute;
    right: ${props => props.offRight ? '0%' : 'auto'};
    top: 100%;
    transform: ${props => props.open ? 'scale(1)' : 'scale(0.75)'};
    transform-origin: top right;
    width: 300px;
  }
`

const ListHeader = styled.li`
  background-color: #e7eef6;
  border-bottom: 1px solid #e2e2e3;
  color: #4a4c4e;
  font-size: 14px;
  font-weight: 500;
  padding: 15px 20px;
`

class ListContainer extends Component {

  constructor(props) {
    super(props)
    this._isMenuOver = this._isMenuOver.bind(this)
    this._clickItem = this._clickItem.bind(this)
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
            <ListItem key={i} flag={language.flag} name={language.name} clickItem={this._clickItem} />
          ))
        }

        <ListHeader>Other Languages</ListHeader>
        {
          this.props.data.other.map((language, i) => (
            <ListItem key={i} flag={language.flag} name={language.name} clickItem={this._clickItem} />
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

  _clickItem(e) {
    console.log(e.target)
  }
}

export default ListContainer
