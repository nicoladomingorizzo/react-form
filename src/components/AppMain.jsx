import { useState } from 'react';

export default function AppMain({ objectList }) {
    const [newTask, setNewTask] = useState('Aggiungi Nuova Task');
    const [tasks, setTasks] = useState(objectList);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(newTask);
        if (newTask === "" || '') {
            alert('Il campo è vuoto, impossibile salvare inserire una task')
        };
        setTasks([...tasks, newTask]);
    };

    function handleClickRemove(id) {
        // tasks.splice(index, 1);
        setTasks(prev => prev.filter((task) => task.id !== id));
    };

    function handleClickEdit(id) {
        //     setTasks(prev => prev.map((task) => task.id === id));
    };

    return (
        <>
            <ul className="list-group list-unstyled d-flex justify-content-between">
                {tasks.map((task, index) => {
                    return (
                        <li key={task.id} className='list-group-item py-3 ps-4 ms-3 d-flex justify-content-between align-items-center'>{task.title}
                            <div>
                                <button className='btn' onClick={() => handleClickEdit(index)}><i className='bi bi-pencil px-1'></i></button><button className='btn' onClick={() => handleClickRemove(index)}><i className='bi bi-trash px-1'></i></button>
                            </div>
                        </li>
                    );
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
// Implementare la funzionalità di modifica del titolo di un post.


