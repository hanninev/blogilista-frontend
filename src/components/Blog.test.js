import React from 'react'
import { shallow, mount } from 'enzyme'
import Blog from './Blog'

describe('<Blog />', () => {
  it('before clicking name and author are displayed', () => {
    const blog = {
      title: 'Otsikko',
      author: 'Testaaja',
      url: 'www.joku.fi',
      likes: 0,
      user: {
        name: 'testinimi'
      }
    }
    const blogComponent = shallow(<Blog blog={blog} like={() => console.log('liked')} delete={() => console.log('deleted')} />)
    const contentDiv = blogComponent.find('.blogHidden')

    expect(contentDiv.contains(blog.title))
    expect(contentDiv.contains(blog.author))

    const div = blogComponent.find('.blogShown')

    expect(div.getElement().props.style).toEqual({ display: 'none' })
  })

  it('after clicking the button, all delails are displayed', () => {
    const blog = {
      title: 'Otsikko',
      author: 'Testaaja',
      url: 'www.joku.fi',
      likes: 0,
      user: {
        name: 'testinimi'
      }
    }

    const blogComponent = mount(<Blog blog={blog} like={() => console.log('liked')} delete={() => console.log('deleted')} />)
    const defaultDiv = blogComponent.find('.titleAndAuthor')
    defaultDiv.simulate('click')

    const contentDiv = blogComponent.find('.blogShown')
    expect(contentDiv.contains(blog.title))
    expect(contentDiv.contains(blog.author))
    expect(contentDiv.contains(blog.likes))
    expect(contentDiv.contains(blog.user.name))

    expect(contentDiv.getElement().props.style).toEqual({ display: '' })
  })

})