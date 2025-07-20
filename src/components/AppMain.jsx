import { useState } from 'react';

export default function AppMain({ objectList }) {
    const [newObject, setNewObject] = useState('Aggiungi un nuovo oggetto');
    const [objects, setObjects] = useState(objectList);
    const [editingObj, setEditingObj] = useState(null);
    const [editedObj, setEditedObj] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(newObject);
        if (newObject.trim() === "" || '') {
            alert('Il campo è vuoto, impossibile salvare inserire una object')
        };
        return;
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
            <ul className="list-group list-unstyled d-flex justify-content-between container">
                {objects.map((object, index) => {
                    return (
                        <li key={object.id} className='list-group-item py-3 ps-4 ms-3 d-flex justify-content-between align-items-center'>
                            {
                                editingObj === object.id ? (
                                    <>
                                        <input className='form-control mt-2 py-2 ps-4 ms-3' placeholder={object.title} type="text" value={editedObj} onChange={e => setEditedObj(e.target.value)} />
                                        <div className='d-flex justify-content-between align-items-center mt-2'>
                                            <button className='btn btn-primary mx-1' type='submit' onClick={() => handleClickSave(index)}>salva</button>
                                            <button className='btn btn-warning' onClick={() => setEditingObj(null)}>annulla</button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {object.title}
                                        <div>
                                            <button className='btn btn-secondary mx-1' onClick={() => handleClickEdit(index)}><i className='bi bi-pencil '></i></button>
                                            <button className='btn btn-danger' onClick={() => handleClickRemove(object.id)}><i className='bi bi-trash'></i></button>
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
                    <input className='form-control mt-2 py-2 ps-4 ms-1' placeholder='Inserisci una nuova Cosa da fare' type="text" value={newObject} onChange={e => setNewObject(e.target.value)} />
                    <button className='btn mt-2' type='submit'><i className='bi bi-floppy'>Salva</i></button>
                </div>
            </form>
        </>
    );
};

// BONUS
// Implementare la funzionalità di modifica del titolo di un post.


