import React from 'react'
import BoringListItem from '../components/Boring_List_Item/Boring_List_Item'

export default class List extends React.Component {
  render() {
    return (
        <div>
            <h1>List page</h1>
            <ul>
              <BoringListItem text="list item 1" ></BoringListItem>
              <BoringListItem text="list item 2" ></BoringListItem>
              <BoringListItem text="list item 3" ></BoringListItem>
            </ul>
        </div>
    )
  }
}
