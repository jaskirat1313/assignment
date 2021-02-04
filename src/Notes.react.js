import React, { Component } from "react";
import { observer } from "mobx-react";
import sms from "./sms.png";
//import Button from '@material-ui/core/Button';
class Notes extends Component {
  render() {
    const { title, update, del, edit } = this.props;
    return (
      <div className="m">
        <div className="note">
          
          <div class="header">
  <img src={sms} alt="logo" />
  <h1>{title}</h1>
</div>

          <p>{update}</p>
          <button onClick={del}>Delete</button>
          <button onClick={edit}>Edit</button>

          
        </div>
      </div>
    );
  }
}
export default observer(Notes);
