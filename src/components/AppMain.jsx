import { useState } from 'react';

export default function AppMain({ todoList }) {
    const [newTask, setNewTask] = useState('New Task');
    const [tasks, setTasks] = useState(todoList);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(newTask);
        setTasks([...tasks, newTask])
    }

    return (
        <>
            <ul className="list-group list-unstyled">
                {tasks.map((task, index) => {
                    return (
                        <li key={index} className='list-group-item'>{task}</li>
                    )
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <div className='d-flex'>
                    <input className='form-control mt-2' placeholder='Inserisci una nuova Cosa da fare' type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />
                    <button className='btn' type='submit'><i className='bi bi-floppy'>Salva</i></button>
                </div>
            </form>
        </>
    );
};

// Milestone 1
// Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.
// Milestone 2
// Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.
// BONUS
// Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
// Implementare la funzionalità di modifica del titolo di un post.
