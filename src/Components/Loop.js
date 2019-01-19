//rcc tao nhanh components
import React, { Component } from 'react'

const mangmonhoc = ['ReactJs' , 'React Native' , 'Angular'];

export default class Loop extends Component {
  render() {
    return (
      <div>
          {mangmonhoc.map(subject => <p>{subject}</p>)}
      </div>
    )
  }
}
