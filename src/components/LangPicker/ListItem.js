// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

const StyledListItem = styled.li`
  align-items: center;
  background-color: ${props => props.active ? 'rgba(231,238,246,0.3)' : 'transparent'};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  position: relative;
  transition: all 300ms ease;
  user-select: none;
`

const ItemImage = styled.img`
  height: 24px;
  margin-right: 15px;
  position: relative;
  width: 24px;
`

const ItemText = styled.span`
  color: #5e94fc;
  font-size: 14px;
  font-weight: 300;
`

class ListItem extends Component {

  constructor(props) {
    super(props)
    this._clickItem = this._clickItem.bind(this)
    this.state = {
      active: false
    }
  }

  render() {

    return(
      <StyledListItem onClick={this.props.clickItem} active={this.state.active}>
        <ItemImage src={this.props.flag} />
        <ItemText>{this.props.name}</ItemText>
      </StyledListItem>
    )
  }

  _clickItem() {
    this.setState({active: !this.state.active})
  }
}

export default ListItem
