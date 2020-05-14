import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import BlogAll from './BlogAll'

test('renders content', () => {
  const blogs = [
    {
      title: 'test title',
      author: 'the tester'
    }
  ]

  const component = render(
    <BlogAll blogs={blogs} />
  )

  console.log(component.blogs[0])
  // expect(component.container.title).toHaveTextContent(
  //   'test title'
  // )

  // expect(component.container).toHaveContent(
  //   'the tester'
  // )
})