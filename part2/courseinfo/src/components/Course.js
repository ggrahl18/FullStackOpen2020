import React from 'react';

const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
  }

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>    
    )
}

const Content = (props) => (
    <>
      {props.parts.map((part, index) => <Part part={part.name} exercises={part.exercises} key={index}/>)}
    </>
  )

const Total = (props) => {
    console.log('props is', props.parts)
    const total = props.parts.reduce((s, p) => (s + p.exercises), 0)
    return (
        <p>total of {total} exercises</p>
    )
}

const Course = (props) => {
    return (
      <>
        <Header course={props.course} />
        <Content parts={props.course.parts} />
        <Total parts={props.course.parts} />
      </>
    )
  }

export default Course