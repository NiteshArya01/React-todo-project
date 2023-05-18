import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useState } from "react";
const AddItem = ({ setItemList }) => {
    const [name, setName] = useState('');

    const handleAdd = () => {
        const todoItem = {
            name: name,
            done: false
        }
        setItemList((prevItemList) => {
            return prevItemList.concat(todoItem);
        })
        setName('');
    }
    return (
        <div className="text-center">
            <table style={{ width: '100%' }}>
                <tbody>
                    <tr >
                        <td>
                            <input type="text" className="form-control" placeholder="Enter your item name here..." value={name} onChange={(e) => setName(e.target.value)} />
                        </td>
                        <td style={{ width: '94px' }}>
                            <Button className="btn btn-primary btn-sm" onClick={handleAdd}>Add <FontAwesomeIcon icon={faAdd} /></Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr></hr>
        </div>
    )
}

export default AddItem;