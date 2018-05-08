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

  &:hover {
    background-color: rgba(231,238,246,0.3);
  }
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

    const { clickItem, flag, name } = this.props

    return(
      <StyledListItem
        active={this.state.active}
        onClick={clickItem}
      >
        <ItemImage src={flag} />
        <ItemText>{name}</ItemText>
      </StyledListItem>
    )
  }

  _clickItem() {
    this.setState({active: !this.state.active})
  }
}

export default ListItem
