import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)}></input>
            <label style={(item.checked) ? { textDecoration: 'line-through' } : null} onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
            <FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex="0" aria-label={`Delte ${item.item}`}/>
        </li>
    )
}

export default LineItem;