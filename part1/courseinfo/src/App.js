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

const Content = (props) => {
  return (
    <div>
      <Part name={props.one.name} exercises={props.one.exercises} />
      <Part name={props.two.name} exercises={props.two.exercises} />
      <Part name={props.three.name} exercises={props.three.exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.one + props.two + props.three}</p> 
  )
}

const App = () => {
  const course = "Half Stack application development"
  const part1 = {name: "Fundamentals of React", exercises: 10}
  const part2 = {name: "Using props to pass data", exercises: 7}
  const part3 = {name: "State of a component", exercises: 14}

  return (
    <div>
      <Header course={course} />
      <Content one={part1} two={part2} three={part3}/>
      <Total one={part1.exercises} two={part2.exercises} three={part3.exercises}/>
    </div>
  )
}

export default App