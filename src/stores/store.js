import { decorate, observable } from "mobx"

class Store {
  constructor() {
    let title = null
    let desc = null
    let id = null
    let editPost=null
    let posts = [] //[{task: '', desc:''}]
  }

  setTitle(title) {
    this.title = title
    localStorage.setItem("title", title)
    return this.title
  }

  getTitle() {
    if (!this.title && localStorage.getItem("title")) {
      this.setTitle(localStorage.getItem("title"))
    }
    return this.title
  }

  setDesc(desc) {
    this.desc = desc
    localStorage.setItem("desc", desc)
    return this.desc
  }

  getDesc() {
    if (!this.desc && localStorage.getItem("desc")) {
      this.setDesc(localStorage.getItem("desc"))
    }
    return this.desc
  }

  setEditPost(editPost) {
    this.editPost = editPost
    localStorage.setItem("editPost", editPost)
    return this.editPost
  }

  getEditPost() {
    if (!this.editPost && localStorage.getItem("editPost")) {
      this.setEditPost(localStorage.getItem("editPost"))
    }
    return this.editPost
  }

  setId(id) {
    this.id = id
    localStorage.setItem("id", id)
    return this.id
  }

  getId() {
    if (!this.id && localStorage.getItem("id")) {
      this.setId(localStorage.getItem("id"))
    }
    return this.id
  }

  setPosts(posts) {
    localStorage.setItem("posts", JSON.stringify(posts))
    this.posts = posts
    return this.posts
  }

  getPosts() {
    if (!this.posts && localStorage.getItem("posts")) {
      this.setPosts(JSON.parse(localStorage.getItem("posts")))
    }
    return this.posts
  }
}

decorate(Store, {
  title: observable,
  desc: observable,
  posts: observable,
})

export default new Store()
