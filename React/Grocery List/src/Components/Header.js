const Header = ({title}) => {
    // const headerStyle = {
    //     backgroundColor: 'mediumblue',
    //     color: '#fff'
    // };
    return (
        // <header style={headerStyle}>
        //     <h1>Groceries List</h1>
        // </header>
        <header>
            {/* <h1>Groceries List</h1> */}
            <h1>{title}</h1>
        </header>
    )
}

export default Header;