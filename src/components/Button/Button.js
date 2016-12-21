import React from 'react'
import styles from './styles.css'

export default class CoolButton extends React.Component {
    render(){
        return (
            <button className={styles.button}>{this.props.text}</button>
        )
    }
}
