import React from 'react'
import ReactDOM from 'react-dom'
import LangPicker from '../LangPicker'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LangPicker />, div)
})
