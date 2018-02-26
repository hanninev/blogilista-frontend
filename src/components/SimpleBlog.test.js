import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

    const blog = {
      title: 'Otsikko',
      author: 'Testaaja',
      likes: 0
    }

describe.only('<SimpleBlog />', () => {
  it('renders content', () => {

    const blogComponent = shallow(<SimpleBlog blog={blog} />)
    const likes = blogComponent.find('.likes')
    const details = blogComponent.find('.details')

    expect(likes.text()).toContain('blog has 0 likes')
    expect(details.text()).toContain('Otsikko Testaaja')
  })

  it('clicking the button two times calls event handler two times', () => {

  const mockHandler = jest.fn()

  const blogComponent = shallow(
    <SimpleBlog
      blog={blog}
      onClick={mockHandler}
    />
  )

  const button = blogComponent.find('button')
  button.simulate('click')
  button.simulate('click')

  expect(mockHandler.mock.calls.length).toBe(2)
})
})