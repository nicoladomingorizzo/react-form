import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import todoList from "./db/todoList"

function App() {

  return (
    <>
      <AppHeader />
      <AppMain />
    </>
  )
}

export default App

// Milestone 1
// Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.
// Milestone 2
// Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.
// BONUS
// Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
// Implementare la funzionalità di modifica del titolo di un post.
