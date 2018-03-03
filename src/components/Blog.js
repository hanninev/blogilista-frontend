import React from 'react'
import blogService from '../services/blogs'

class Blog extends React.Component {
  constructor({ props }) {
    super(props)
    this.state = {
      visible: false,
    }
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const blog = this.props.blog
    const like = this.props.like
    const remove = this.props.remove

    const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }
 
  const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

    let del = <p></p>
    if(this.props.user !== undefined) {
    if(this.props.user.username.toString() === blog.user.username.toString()) {
      del = <button onClick={remove(blog)}>delete</button>
    } 
  }

  return (

  <div style={blogStyle}>
        <div style={hideWhenVisible} className="blogHidden">
          <div onClick={this.toggleVisibility} className="titleAndAuthor">
          {blog.title}: {blog.author}
          </div>
        </div>
        <div style={showWhenVisible} className="blogShown">         
          <div>   
            <p onClick={this.toggleVisibility}> {blog.title} {blog.author} </p>
            <p> {blog.url} </p>
            </div><div>
            <p> {blog.likes} likes <button onClick={like(blog)}>like</button></p>
            </div><div onClick={this.toggleVisibility}>   
            <p> added by {blog.user.name}</p>
            {del}
          </div>
        </div>
      </div>
)
}
}

export default Blog