import React from 'react'
import CoolButton from '../components/Button/Button'
import BoringButton from '../components/Boring_Button/Boring_Button'

export default class Home extends React.Component {
  render() {
    return (
        <div>
            <h1>Home page</h1>
            <p>This is a home page</p>
            <CoolButton text='A super cool button!'/>
            <BoringButton text='A super boring button!'/>
        </div>
    )
  }
}
