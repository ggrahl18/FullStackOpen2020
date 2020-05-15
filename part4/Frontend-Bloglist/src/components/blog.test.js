import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'
import BlogAll from './BlogAll'

describe('Blog renders...', () => {
  let component
  let title = 'test title'
  let author = 'the tester'
  let url = 'www.google.com'
  let votes = '2'

  test('title and author, but not url, nor votes', () => {
    let component = render(
      <Blog title={title} author={author} url={url} votes={votes} />
    )

    const div = component.container.querySelector('.BlogShow')
    expect(div).toHaveTextContent(title)
    expect(div).toHaveTextContent(author)
    expect(div).not.toHaveTextContent(url)
    expect(div).not.toHaveTextContent(votes)
  })

  test('at start the children are not displayed', () => {
    let component = render(
      <Blog title={title} author={author} url={url} votes={votes} />
    )

    const div = component.container.querySelector('.BlogHide')

    expect(div).toHaveStyle('display: none')
  })

  test('show more succesfully clicked, displaying url & votes', () => {
    let component = render(
      <Blog title={title} author={author} url={url} votes={votes} />
    )

    const button = component.getByText('show more')
    fireEvent.click(button)

    const div = component.container.querySelector('.BlogHide')
    expect(div).not.toHaveStyle('display: none')
    expect(div).toHaveTextContent(url)
    expect(div).toHaveTextContent(votes)
  })

  test('event handler is called when voting is clicked', () => {
    const mockHandler = jest.fn()

    let blogs = [
      {
        title: 'test title',
        author: 'the tester',
        url: 'www.google.com',
        votes: '2',
        id: 0
      }
    ]

    component = render(
      <BlogAll blogs={blogs} addVote={mockHandler} />
    )

    const button = component.getByText('vote')
    fireEvent.click(button)
    expect(mockHandler.mock.calls).toHaveLength(1)

    fireEvent.click(button)
    expect(mockHandler.mock.calls).toHaveLength(2)
  })
})