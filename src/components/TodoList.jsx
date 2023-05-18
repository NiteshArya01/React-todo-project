import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFileAlt, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const TodoList = ({ itemList, setItemList }) => {
    const [name, setName] = useState('');

    const handleEdit = (index) => {
        const edittableData = itemList.map((item, id) => {
            return id === index ? { ...item, done: !item.done } : item
        })
        setItemList(edittableData);
    }
    const getName = (event, index) => {
        console.log(index);
        let name = event.target.value;
        const edittableData = itemList.map((item, id) => {
            return id === index ? { ...item, name: name } : item
        })
        setItemList(edittableData);
    }
    const handleDelete = (index) => {
        setItemList((prevTodos) => {
            return prevTodos.filter((t, id) => id !== index);
        });
    }
    return (
        <div className="text-center">
            <table style={{ width: '100%' }}>
                <tbody>
                    {
                        itemList.map((item, id, arr) => {
                            return (
                                <tr key={id}>
                                    <td>
                                        <input type="text" className="form-control" value={item.name} disabled={!item.done} onChange={(e) => getName(e, id)} />
                                    </td>
                                    <td>
                                        <FontAwesomeIcon icon={item.done == false ? faEdit : faFileAlt} color={!item.done ? '#999' : 'green'} style={{ cursor: 'pointer', marginRight: '5px' }} onClick={() => handleEdit(id)} />

                                        <FontAwesomeIcon icon={faTrash} color="red" style={{ cursor: 'pointer' }} onClick={() => handleDelete(id)} />
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default TodoList;