import "./App.css";
import React, { Component } from "react";
import Main from "./MainNote.react";
import Notes from "./Notes.react";
import ObjectCard from "./ObjectCard.react";

import { observer } from "mobx-react";
import store from "./stores/store";

export class App extends Component {
  render() {
    const posts = store.getPosts();

    return (
      <div>
        <Main />

        {posts &&
          posts.map((post, i) => (
            <ObjectCard
              key={post.i}
              id={post.id}
              title={post.title}
              update={post.desc}
              
              del={() => {
                let updatePost = store.getPosts();
                const filteredPost = updatePost.filter(
                  (uPost) => uPost.id !== post.id
                );

                store.setPosts(filteredPost);
              }}
              edit={() => {
                let updatePost = store.getPosts();
                const filteredPost = updatePost.filter(
                  (uPost) => uPost.id !== post.id
                );

                const selectedItem = updatePost.find(
                  (ePosts) => ePosts.id === post.id
                );
                // console.log(selectedItem.title)
                store.setPosts([...filteredPost,])

                store.setTitle(selectedItem.title)
                  store.setDesc(selectedItem.desc)
                  store.setId(post.id)
                  store.setEditPost(true)
                
              } }
            />
          ))}
      </div>
    )
  }
}

export default observer(App);
