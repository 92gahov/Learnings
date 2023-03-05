import axios from 'axios';
import React, { useState } from 'react'

function CustomerForm({ getCustomers }) {

    const [customerName, setCustomerName] = useState("");

    const saveCustomer = async (e) => {
        e.preventDefault();
        try {
            const customerData = {
                name: customerName
            }
            await axios.post("http://localhost:5000/customer", customerData);
            getCustomers();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <form onSubmit={saveCustomer}>
                <input type="text" placeholder='customer name' onChange={(e) => setCustomerName(e.target.value)} value={customerName} />
                <button type='submit'>Save</button>
            </form>
        </div>
    )
};

export default CustomerForm