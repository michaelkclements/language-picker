// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import data from '../../languages.json'
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
  height: 42px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: all 300ms ease;
  user-select: none;
  width: 42px;

  &:before {
    background-color: #4787FF;
    border-radius: 50%;
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) ${props => props.open ? 'scale(1)' : 'scale(0)'};
    transition: all 300ms ease;
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

        <StyledButton onClick={this._toggleMenu} open={this.state.open}>
          <StyledButtonImage src='https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png' />
        </StyledButton>

        <ListContainer data={data} open={this.state.open} />

      </StyledLangPicker>
    )
  }

  _toggleMenu() {
    this.setState(prevState => ({ open: !prevState.open }))
  }

}

export default LangPicker
