import React from 'react'
// import styles from './styles.css'

const buttonStyle = {
  backgroundColor: 'peru',
  fontSize: '25px',
  color: 'white'
}

export default class BoringButton extends React.Component {
    render(){
        return (
            <button style={buttonStyle}>{this.props.text}</button>
        )
        // return (
        //     <button className="blue-button">{this.props.text}</button>
        // )
    }
}
