import { useState } from 'react';

export default function AppMain({ objectList }) {
    const [newObject, setNewObject] = useState('Aggiungi un nuovo oggetto');
    const [objects, setObjects] = useState(objectList);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(newObject);
        if (newObject === "" || '') {
            alert('Il campo è vuoto, impossibile salvare inserire una task')
        };
        setObjects([...objects, newObject]);
    };

    function handleClickRemove(id) {
        // objects.splice(index, 1);
        setObjects(prev => prev.filter((task) => task.id !== id));
    };

    function handleClickEdit(id) {
        // setObjects(prev => prev.map(task, title => {

        //     if (task.id === id) {
        //         task.title = '<h1>Lorem ipsum dolor sit amet.</h1>'
        //         // <input className='form-control  py-3 ps-4 ms-3' placeholder={title} type="text" value={setObjects} onChange={e => setNewObject(e.target.value)} />
        //     }
        //     return task
        // }
        // ))
    };

    return (
        <>
            <ul className="list-group list-unstyled d-flex justify-content-between">
                {objects.map(task => {
                    return (
                        <li key={task.id} className='list-group-item py-3 ps-4 ms-3 d-flex justify-content-between align-items-center'>{task.title}
                            <div>
                                <button className='btn' onClick={() => handleClickEdit(task.id)}><i className='bi bi-pencil px-1'></i></button><button className='btn' onClick={() => handleClickRemove(task.id)}><i className='bi bi-trash px-1'></i></button>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <div className='d-flex'>
                    <input className='form-control mt-2 py-2 ps-4 ms-3' placeholder='Inserisci una nuova Cosa da fare' type="text" value={newObject} onChange={e => setNewObject(e.target.value)} />
                    <button className='btn' type='submit'><i className='bi bi-floppy'>Salva</i></button>
                </div>
            </form>
        </>
    );
};

// BONUS
// Implementare la funzionalità di modifica del titolo di un post.


