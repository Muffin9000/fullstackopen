const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  )

}

const Part = (props) => {
  return (
      <p>{props.name} {props.exercises}</p>
  )
}

const Content = ({parts}) => {

  return (
    <>
      {parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </>
  )
}

const Total = ({parts}) => {
  function getTotal(sum, num) {
    return sum + num.exercises
  }

  let total = parts.reduce(getTotal , 0)
  return (
    <p><strong>total of {total} exercises</strong></p> 
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
  <>
    {courses.map(course => <Course key={course.id} course={course} />)}
  </>
  )
}

export default App