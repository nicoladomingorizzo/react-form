import { useState } from 'react';

export default function AppMain({ objectList }) {
    const [newObject, setNewObject] = useState('Aggiungi un nuovo oggetto');
    const [objects, setObjects] = useState(objectList);
    const [editingObj, setEditingObj] = useState(null);
    const [editedObj, setEditedObj] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(newObject);
        if (newObject.trim() === '') {
            alert('Il campo è vuoto, impossibile salvare. Inserisci un nuovo oggetto')
            return;
        }; //FIXME: non funziona pienamente, salva l'oggetto vuoto
        setObjects([...objects, { id: Date.now(), title: newObject }]); //NOTE: ho cambiato (objects.length) con Date.now() perché mi crea un nuovo id in base alla data, avevo trovato anche useRef ma ho visto che è più macchinoso quindi ho optato per questo
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
            <ul className="list-group list-unstyled d-flex justify-content-between container">
                {objects.map((object, index) => {
                    return (
                        <li key={object.id} className='list-group-item py-3 ps-4 ms-3 d-flex justify-content-between align-items-center'>
                            {
                                editingObj === object.id ? (
                                    <>
                                        <input className='form-control mt-2 py-2 ps-4 ms-3' placeholder={object.title} type="text" value={editedObj} onChange={e => setEditedObj(e.target.value)} />
                                        <div className='d-flex justify-content-between align-items-center mt-2'>
                                            <button className='btn btn-outline-primary mx-1' type='submit' onClick={() => handleClickSave(index)}><i className='bi bi-floppy'>Salva</i></button>
                                            <button className='btn btn-outline-warning' onClick={() => setEditingObj(null)}><i className="bi bi-x-octagon">Annulla</i></button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {object.title}
                                        <div >
                                            <button className='btn btn-outline-secondary mx-1' onClick={() => handleClickEdit(index)}><i className='bi bi-pencil '>Modifica</i></button>
                                            <button className='btn btn-outline-danger' onClick={() => handleClickRemove(object.id)}><i className='bi bi-trash'>Elimina</i></button>
                                        </div>
                                    </>
                                )
                            }
                        </li>
                    );
                })}
            </ul>
            <form className='container' onSubmit={handleSubmit}>
                <div className='d-flex'>
                    <input className='form-control my-2 py-2 ps-4 ms-1' placeholder='Inserisci un nuovo oggetto' type="text" value={newObject} onChange={e => setNewObject(e.target.value)} />
                    <button className='btn btn-outline-primary my-2' type='submit'><i className='bi bi-floppy'>Salva</i></button>
                </div>
            </form>
        </>
    );
};

// BONUS
// Implementare la funzionalità di modifica del titolo di un post.


