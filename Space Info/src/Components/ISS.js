import React from "react";

class ISS extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            positions: "",
        }
    }
    componentDidMount() {
        setInterval(() => {
            fetch("http://api.open-notify.org/iss-now.json")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    positions: json.iss_position
                })
            })
        }, 3000)
    }
    render() {
        const {positions} = this.state
        return (
            <div className="ISS-info">
                <h3>The ISS position.</h3>
                <p>The ISS is currently over: <i>{positions.latitude}&deg; N</i>, <i>{positions.longitude}&deg; E</i></p>
            </div>
        )
    }
}

export default ISS;