import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import objectList from "./db/objectList"

function App() {

  return (
    <>
      <AppHeader />
      <AppMain objectList={objectList} />
    </>
  )
}

export default App

