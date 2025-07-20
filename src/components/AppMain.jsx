import { useState } from 'react';

export default function AppMain({ objectList }) {
    const [newObject, setNewObject] = useState('Aggiungi un nuovo oggetto');
    const [objects, setObjects] = useState(objectList);
    const [editingObj, setEditingObj] = useState(null);
    const [editedObj, setEditedObj] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(newObject);
        if (newObject === "" || '') {
            alert('Il campo è vuoto, impossibile salvare inserire una object')
        };
        setObjects([...objects, { id: (objects.length), title: newObject }]);
        setNewObject('');
    };

    function handleClickRemove(id) {
        // objects.splice(index, 1);
        setObjects(prev => prev.filter((object) => object.id !== id));
    };

    function handleClickEdit(index) {
        // setObjects(prev => {
        //     return prev.map(object => {
        //         if (object.id === id) {
        //             object.title = title;
        //         }
        //         return object
        //     })
        // }
        // )
        setEditingObj(objects[index].id);
        setEditedObj(objects[index].title);
        ;

    };

    function handleClickSave(index) {
        objects[index] = {
            ...objects[index],
            title: editedObj
        };
        setObjects([...objects]);
        setEditingObj(null);
    };

    return (
        <>
            <ul className="list-group list-unstyled d-flex justify-content-between">
                {objects.map((object, index) => {
                    return (
                        <li key={object.id} className='list-group-item py-3 ps-4 ms-3 d-flex justify-content-between align-items-center'>
                            {
                                editingObj === object.id ? (
                                    <>
                                        <input className='form-control mt-2 py-2 ps-4 ms-3' placeholder={object.title} type="text" value={editedObj} onChange={e => setEditedObj(e.target.value)} />
                                        <button onClick={() => handleClickSave(index)}>salva</button>
                                        <button onClick={() => setEditingObj(null)}>annulla</button>
                                    </>
                                ) : (
                                    <>
                                        {object.title}
                                        <div>
                                            <button className='btn' onClick={() => handleClickEdit(index)}><i className='bi bi-pencil px-1'></i></button>
                                            <button className='btn' onClick={() => handleClickRemove(object.id)}><i className='bi bi-trash px-1'></i></button>
                                        </div>
                                    </>
                                )
                            }
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


