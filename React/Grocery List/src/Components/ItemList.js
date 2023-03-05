import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {
                items.map((item) => (
                    // <li className="item" key={item.id}>
                    //     <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)}></input>
                    //     <label style={(item.checked) ? { textDecoration: 'line-through' } : null} onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                    //     <FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex="0" />
                    // </li>
                    <LineItem key={item.id} item={item} handleCheck={handleCheck} handleDelete={handleDelete}/>
                ))
            }
        </ul>
    )
}

export default ItemList;