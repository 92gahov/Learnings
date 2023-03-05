import React from 'react'

function CustomerList({ customers }) {

    const renderCustomers = () => {
        return customers.map((customer) => {
            return <li key={customer._id}>{customer.name}</li>
        })
    };

    return (
        <div>
            <ul>
                {renderCustomers()}
            </ul>
        </div>
    )
}

export default CustomerList