import { useState } from 'react';

export default function AppMain({ todoList }) {
    const [newTask, setNewTask] = useState('New Task');
    const [tasks, setTasks] = useState(todoList);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(newTask);
        setTasks([...tasks, newTask]);
    }
    function handleClickRemove(index) {
        tasks.splice(index, 1);
        setTasks([...tasks]);
    }

    return (
        <>
            <ul className="list-group list-unstyled d-flex justify-content-between">
                {tasks.map((task, index) => {
                    return (
                        <li key={index} className='list-group-item py-3 ps-4 ms-3'>{task}<button className='btn mx-2' onClick={() => handleClickRemove(index)}><i className='bi bi-trash px-1'></i></button></li>
                    )
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <div className='d-flex'>
                    <input className='form-control mt-2 py-2 ps-4 ms-3' placeholder='Inserisci una nuova Cosa da fare' type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />
                    <button className='btn' type='submit'><i className='bi bi-floppy'>Salva</i></button>
                </div>
            </form>
        </>
    );
};

// BONUS
// Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
// Implementare la funzionalità di modifica del titolo di un post.
