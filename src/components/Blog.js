import React from 'react'
import blogService from '../services/blogs'

class Blog extends React.Component {
  constructor({props}) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  like = (event) => {
  event.preventDefault()
  const blog = this.props.children
  blog.likes++

   blogService
      .update(blog.id, blog)
      .then(updatedBlog => {
        this.setState({
          visible: true 
        })
  })
}

 delete = (event) => {
  event.preventDefault()
  const blog = this.props.children

   blogService
      .remove(blog.id)
      
      this.setState({
          visible: false 
        })
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const blog = this.props.children
    const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }
 
  const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

   const userId = `bearer ${blog.user._id}`
   //if(userId === props.loggedIn.token) {
    // console.log("JOOOO!")
  // }
   console.log(props.loggedin.name)
  return (

  <div style={blogStyle}>
        <div style={hideWhenVisible}>
          <div onClick={this.toggleVisibility}>
          {blog.title}: {blog.author}
          </div>
        </div>
        <div style={showWhenVisible}>         
          <div onClick={this.toggleVisibility}>   
            <p> {blog.title} {blog.author} </p>
            <p> {blog.url} </p>
            <p> {blog.likes} likes <button onClick={this.like}>like</button></p>
            <p> added by {blog.user.name}</p>
            <button onClick={this.delete}>delete</button>
          </div>
        </div>
      </div>
)
}
}

export default Blog