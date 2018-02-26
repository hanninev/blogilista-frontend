import React from 'react'
import blogService from './services/blogs'
import loginService from './services/login'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import Blog from './components/Blog'
import Notification from './components/Notification'
import Togglable from './components/Togglable'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = 
    {
      blogs: [],
      title: '',
      author: '',
      url: '',
      likes: '',
      error: null,
      message: null,
      username: '',
      password: '',
      user: null
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )

  const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    this.setState({user})
    blogService.setToken(user.token)
  }
  }

  logout = () => () => {
    window.localStorage.removeItem('loggedBlogUser')
    this.setState({ user: null, message: "Olet kirjautunut ulos!" })
  }
  
  delete = (blog) => () => {
  if (window.confirm("Haluatko varmasti poistaa blogin " + blog.title + "?")) { 
      blogService
      .remove(blog.id)
  
        this.setState({
          blogs: this.state.blogs.filter(function(a) {
            return a !== blog
          })
      })
  }
  }

  like = (blog) => () => {
  blog.likes++

   blogService
      .update(blog.id, blog)
      .then(updatedBlog => {
        this.setState({
          blogs: this.state.blogs.filter(function(a) {
            return a !== blog
          })
        })
        this.setState({
          blogs: this.state.blogs.concat(updatedBlog) 
        })
  })
}

  addBlog = (event) => {
    event.preventDefault()
    this.blogForm.toggleVisibility()
    const blogObject = {
      title: this.state.title,
      author: this.state.author,
      url: this.state.url
    }

    blogService
      .create(blogObject)
      .then(newBlog => {
        this.setState({
          blogs: this.state.blogs.concat(newBlog),
          title: '',
          author: '',
          url: '',
          message: "Blogin lisääminen onnistui!"
        })
        })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  toggleVisible = () => {
    this.setState({ showAll: !this.state.showAll })
  }

  login = async (event) => {
  event.preventDefault()
  try{
    const user = await loginService.login({
      username: this.state.username,
      password: this.state.password
    })

    window.localStorage.setItem('loggedBlogUser', JSON.stringify(user))
    blogService.setToken(user.token)
    this.setState({ username: '', password: '', user, message: "Sisäänkirjautuminen onnistui!"})
  } catch(exception) {
    this.setState({
      error: 'käyttäjätunnus tai salasana virheellinen',
    })
    setTimeout(() => {
      this.setState({ error: null })
    }, 5000)
  }
  }

  render() {
    if(this.state.error !== null || this.state.message !== null) {
            setTimeout(() => {
        this.setState({ message: null })
        }, 5000)
    }

      const loginForm = () => (
      <LoginForm
        login={this.login}
        handleChange={this.handleChange}
        username={this.state.username}
        password={this.state.password}
        />
      )

      const blogForm = () => (
      <Togglable buttonLabel="Lisää blogi" ref={component => this.blogForm = component}>
      <BlogForm
        addBlog={this.addBlog}
        handleChange={this.handleChange}
        newTitle={this.state.title}
        newAuthor={this.state.author}
        newUrl={this.state.url}
        />
        </Togglable>
      )

      const getAllBlogs = () => {
        this.state.blogs.sort(function(a, b) {
          return b.likes - a.likes
        })

        return(
        <div>
        <h2>Blogs</h2>
        {this.state.blogs.map(blog => 
           <Blog key={blog._id} delete={this.delete} like={this.like}>
          {blog}
          </Blog>
        )}
        </div>
    )}
    return (
      <div>
      <h2>Blogs</h2>

      <Notification message={this.state.message} error={this.state.error} />

      {this.state.user === null ?
      loginForm() :
      <div>
      <p>{this.state.user.name} logged in <button onClick={this.logout()}>logout</button></p>
      {blogForm()}
      {getAllBlogs()}
      </div>
      }
      </div>

    )
  }
}

export default App;
      