import React, { Component } from "react";

import { observer } from "mobx-react";
import store from "../stores/store";
import { v4 as uuidv4 } from "uuid";

class Main extends Component {
  render() {
    const title = store.getTitle();
    const desc = store.getDesc();
    const id = store.getId();
    const editPost = store.getEditPost();
    const posts = store.getPosts();
    const { v4: uuidv4 } = require("uuid");

    return (
      <div className="wrapper">
        <form>
          <input
            type="text"
            name="tittle"
            placeholder="Tittle"
            value={title ? title : ""}
            onChange={(e) => {
              store.setTitle(e.target.value);
            }}
            autoComplete="off"
          />
          <br />
          <br />
          <textarea
            placeholder="Description"
            name="desc"
            value={desc ? desc : ""}
            onChange={(e) => {
              store.setDesc(e.target.value);
            }}
            autoComplete="off"
          ></textarea>
          <br />
          <br />

          <button
            type="button"
            onClick={() => {
              let posts = store.getPosts();
              if (!posts) {
                posts = [];
              }

              store.setPosts([
                ...posts,
                {
                  id: uuidv4(),
                  title: title,
                  desc: desc,
                  editPost: "",
                },
              ]);
              store.setId("");
              store.setTitle("");
              store.setDesc("");
              store.setEditPost("");
            }}
          >
            {" "}
            {editPost ? "Edit Post" : "Create"}
          </button>
        </form>
      </div>
    );
  }
}
export default observer(Main);
