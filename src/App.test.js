import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
jest.mock('./services/blogs')
import blogService from './services/blogs'

 describe('<App />', () => {
    let app
  
    describe('when user is not logged', () => {
      beforeEach(() => {
        app = mount(<App />)  
    })
  
      it('only login form is rendered', () => {
        app.update()
        expect(app.find(LoginForm).exists()).toEqual(true)
        expect(app.find(Blog).exists()).toEqual(false)
      })
    })
    
  // Tehtävä 16
 /*   describe('when user is logged', () => {
      beforeEach(() => {
        const user = {
            username: 'tester',
            token: '1231231214',
            name: 'Teuvo Testaaja'
          }
          window.localStorage.setItem('loggedBlogUser', JSON.stringify(user))
          app = mount(<App />)
        })
  
      it('all notes are rendered', () => {
        
        app.update()
        const blogComponents = app.find(Blog)
        blogComponents.debug()
        expect(blogComponents.length).toEqual(blogService.blogs.length)
      })
    }) */
  })