import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import BlogForm from './BlogForm'

test('blog added', () => {
  const createBlog = jest.fn()

  const component = render(
    <BlogForm createBlog={createBlog} />
  )

  const form = component.container.querySelector('form')

  const title = component.container.querySelector('#title')
  fireEvent.change(title, {
    target: { value: 'FSO is awesome!' }
  })
  fireEvent.submit(form)

  const author = component.container.querySelector('#author')
  fireEvent.change(author, {
    target: { value: 'George Lucas' }
  })
  fireEvent.submit(form)

  const url = component.container.querySelector('#url')
  fireEvent.change(url, {
    target: { value: 'https://fullstackopen.com/en' }
  })
  fireEvent.submit(form)

  expect(createBlog.mock.calls).toHaveLength(3)
  expect(createBlog.mock.calls[0][0].title).toBe('FSO is awesome!')
  expect(createBlog.mock.calls[1][0].author).toBe('George Lucas')
  expect(createBlog.mock.calls[2][0].url).toBe('https://fullstackopen.com/en')
})