// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import data from '../../data/languages.json'
import ListContainer from './ListContainer'

const StyledLangPicker = styled.div`
  background-color: #205ba3;
  position: relative;
`

const StyledButton = styled.div`
  align-items: center;
  border-left: 1px solid #769BC8;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  user-select: none;
  width: 50px;

  &:before {
    background-color: #4787FF;
    border-radius: 50%;
    content: '';
    width: 500%;
    height: 300%;
    position: absolute;
    left: 50%;
    top: 0%;
    transform: translate(-50%,-50%) ${props => props.open ? 'scale(1)' : 'scale(0)'};
    transform-origin: top;
    transition: all 400ms ease ${props => props.open ? '0s' : '200ms'};
  }
`

const StyledButtonImage = styled.img`
  height: 24px;
  position: relative;
  width: 24px;
  z-index: 1;
`

class LangPicker extends Component {

  constructor(props) {
    super(props)
    this._toggleMenu = this._toggleMenu.bind(this)
    this.state = {
      open: false
    }
  }

  render() {
    return(
      <StyledLangPicker>

        <StyledButton
          onClick={this._toggleMenu}
          open={this.state.open}
        >
          <StyledButtonImage src='https://i.imgur.com/BHZ7yhs.png' />
        </StyledButton>

        <ListContainer
          data={data}
          open={this.state.open}
        />

      </StyledLangPicker>
    )
  }

  _toggleMenu() {
    this.setState(prevState => ({ open: !prevState.open }))
  }

}

export default LangPicker
