// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

import { LangPicker } from '../'

const StyledHeader = styled.div`
  background-color: #205ba3;
  display: flex;
  flex-direction: row;
`

const HeaderColumn = styled.div`
  align-items: center;
  display: flex;
  flex: 1;

  &:last-child {
    justify-content: flex-end;
  }
`

const Logo = styled.span`
  color: #fff;
  padding: 10px;
`

const PoundButton = styled.div`
  align-items: center;
  border-left: 1px solid #769BC8;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  user-select: none;
  width: 50px;

  &:before {
    color: #fff;
    content: '£';
    font-size: 24px;
    font-weight: 700;
  }
`

class Header extends Component {

  render() {
    return(
      <StyledHeader>

        <HeaderColumn>
          <Logo>Logo</Logo>
        </HeaderColumn>

        <HeaderColumn>
          <LangPicker />
          <PoundButton />
        </HeaderColumn>

      </StyledHeader>
    )
  }
}

export default Header
