import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import todoList from "./db/todoList"

function App() {

  return (
    <>
      <AppHeader />
      <AppMain todoList={todoList} />
    </>
  )
}

export default App

