import React from "react";

class People extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            people: [],
            number: ""
        }
    }
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    people: json.people,
                    number: json.number
                })
            })
    }
    render() {
        const { people, number } = this.state;
        return (
            <div className="People-info">
                <h3>There are currently <span>{number}</span> humans in space.</h3>
                {
                    people.map((person) => (
                        <div key={person.name}>
                            <p>Name:&nbsp;&nbsp;&nbsp;<i>{person.name}</i> - Craft:&nbsp;&nbsp;&nbsp;<i>{person.craft}</i></p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default People;

