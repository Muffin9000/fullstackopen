const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const a = 20;
const b = 30;

const App = () => {
  return (
  <>
    <p>Greeting</p>
    <Hello name="Gosha" age={a + b}/>
    <Hello name="Jerry" age={b}/>
    <Hello name="Kesha" age={18}/>
  </>
  )
}

export default App