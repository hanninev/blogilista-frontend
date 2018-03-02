import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

describe('<Blog />', () => {
  it('before clicking name and author are displayed', () => {
    const blog = {
      title: 'Otsikko',
      author: 'Testaaja',
      likes: 0,
      user: {
        name: 'testinimi'
      }
    }

    const blogComponent = shallow(<Blog blog={blog} like={() => console.log('liked')} delete={() => console.log('deleted')} />)
    const contentDiv = blogComponent.find('blogHidden')

    expect(contentDiv.contains(blog.title))
    expect(contentDiv.contains(blog.author))
  })

  it('after clicking the button, all delails are displayed', () => {
    const blog = {
      title: 'Otsikko',
      author: 'Testaaja',
      likes: 0,
      user: {
        name: 'testinimi'
      }
    }

    const blogComponent = shallow(<Blog blog={blog} like={() => console.log('liked')} delete={() => console.log('deleted')} />)
    const defaultDiv = blogComponent.find('blogHidden')
    defaultDiv.simulate('click')

    const contentDiv = blogComponent.find('blogShown')
    expect(defaultDiv.contains(blog.title))
    expect(defaultDiv.contains(blog.author))
    expect(contentDiv.contains(blog.likes))
    expect(contentDiv.contains(blog.user.name))
  })

})