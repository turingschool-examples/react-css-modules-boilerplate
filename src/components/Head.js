import React from 'react'
class Head extends React.Component {
    render() {
        return (
            <head>
              <title>{this.props.title}</title>
              <link rel="stylesheet" href="styles.css" />
              <link rel="stylesheet" href="boring_styles.css" />
              <link rel="stylesheet" href="list/boring_styles.css" />
            </head>
        )
    }
}

export default Head
