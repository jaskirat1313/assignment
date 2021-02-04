import React, { Component } from "react"

import Notes from "./Notes.react"

import { observer } from "mobx-react"

class ObjectCard extends Component {
  render() {
    const { id, title, update, del, edit } = this.props

    return (
      <div>
        <Notes
          id={id}
          title={title}
          update={update}
          del={del}
          edit={edit}
        />
      </div>
    )
  }
}

export default observer(ObjectCard)
