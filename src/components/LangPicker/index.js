// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import ListContainer from './ListContainer'

const StyledLangPicker = styled.div`
  background-color: #205ba3;
  position: relative;
`

const StyledButton = styled.div`
  align-items: center;
  background-color: ${props => props.open ? 'rgba(255,255,255,0.2)' : 'transparent'};
  cursor: pointer;
  display: flex;
  height: 30px;
  justify-content: center;
  transition: all 300ms ease;
  user-select: none;
  width: 30px;
`

const StyledButtonImage = styled.img`
  height: 16px;
  width: 16px;
`


const data = {
  popular: [
    { name: 'English', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png'},
    { name: 'French', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/96/flag-for-france_1f1eb-1f1f7.png'}
  ],
  other: [
    { name: 'English', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png'},
    { name: 'English', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png'},
    { name: 'English', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png'},
    { name: 'English', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png'},
    { name: 'English', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png'},
    { name: 'English', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png'},
    { name: 'English', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png'},
    { name: 'English', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png'},
    { name: 'English', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png'},
    { name: 'English', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png'},
    { name: 'English', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png'},
    { name: 'English', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png'},
    { name: 'English', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/emojipedia/102/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png'},
    { name: 'French', flag: 'https://emojipedia-us.s3.amazonaws.com/thumbs/240/apple/96/flag-for-france_1f1eb-1f1f7.png'}
  ]
}

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
    this.setState({open: !this.state.open})
  }

}

export default LangPicker
