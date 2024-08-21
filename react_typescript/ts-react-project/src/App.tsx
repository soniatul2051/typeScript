
import './App.css'

function App() {
 

  return (
    <>
      <Todo title="Learn React" description="Learn React" done={true} />
      <Todo title="Learn Typescript" description="Learn Typescript" done={false} />
    </>
  )
}
interface TodoProp {
  title: string,
  description: string,
  done: boolean,
}
function Todo(props:TodoProp){

  return (
    <>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <p>{props.done}</p>
      
    </>
  )

}

export default App
