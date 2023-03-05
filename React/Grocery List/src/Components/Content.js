// import { FaTrashAlt } from "react-icons/fa";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {

    // const [count, setCount] = useState(0);
    // const [items, setItems] = useState([
    //     {
    //         id: 1,
    //         checked: false,
    //         item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    //     },
    //     {
    //         id: 2,
    //         checked: false,
    //         item: "Item 2"
    //     },
    //     {
    //         id: 3,
    //         checked: false,
    //         item: "Item 3"
    //     }
    // ]);

    // const handleCheck = (id) => {
    //     // console.log(`key: ${id}`)
    //     const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    //     setItems(listItems);
    //     localStorage.setItem("shoppinglist", JSON.stringify(listItems));
    // }

    // const handleDelete = (id) => {
    //     // console.log(id)
    //     const listItems = items.filter((item) => item.id !== id);
    //     setItems(listItems);
    //     localStorage.setItem("shoppinglist", JSON.stringify(listItems));
    // }
    // const handleName = () => {
    //     const name = "Georgi";
    //     return name;
    // }

    // const handleClick = () => {
    //     setCount(count + 1)
    //     console.log(count)
    // }

    // const handleClick2 = (name) => {
    //     console.log(`${name} was clicked`)
    // }

    // const handleClick3 = (e) => {
    //     console.log(e.target)
    // }

    return (
        <>
            {/* <h3>Hello {handleName()}</h3> */}
            {/* <button onClick={handleClick}>Click it</button>
            <button onClick={() => handleClick2('Georgi')}>Click it</button>
            <button onClick={(e) => handleClick3(e)}>Click it</button> */}
            {
                items.length ? (

                    // <ul>
                    //     {
                    //         items.map((item) => (
                    //             <li className="item" key={item.id}>
                    //                 <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)}></input>
                    //                 <label style={(item.checked) ? { textDecoration: 'line-through' } : null} onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
                    //                 <FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex="0" />
                    //             </li>
                    //         ))
                    //     }
                    // </ul>
                    <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
                ) : (
                    <p style={{ marginTop: '2rem' }}>Your list is empty</p>
                )}
        </>
    )
}

export default Content;