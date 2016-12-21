import React from 'react'
// import styles from './styles.css'

const liStyles = {
  backgroundColor: "rgb(150,150,150)",
  border: "1px solid",
  borderColor: "rgb(200,200,200) transparent rgb(50,50,50)",
  color: "white",
  padding: "1rem"
}

export default class BoringListItem extends React.Component {
    render(){
        return (
            <li style={liStyles}>{this.props.text}</li>
        )
    }
}
