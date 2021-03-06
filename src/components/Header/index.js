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

class Header extends Component {

  render() {
    return(
      <StyledHeader>

        <HeaderColumn>
        </HeaderColumn>

        <HeaderColumn>
          <LangPicker />
        </HeaderColumn>

      </StyledHeader>
    )
  }
}

export default Header
