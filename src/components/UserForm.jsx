import React from 'react';
import "../css/UserForm.css";
import { useNavigate } from 'react-router-dom';

export default function UserForm(props) {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted data:', props.firstName, props.lastName, props.phoneNumber);
        navigate('/confirmation');
    };

    return (
        <div className="user-form">
            <h1 className='uForm'>User Form</h1>
            <form className="handleSubmit" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={props.firstName}
                        onChange={(e) => props.setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={props.lastName}
                        onChange={(e) => props.setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <select onChange={(e) => props.setPaymentMethod(e.target.value)}>
                        <option value="" selected disabled>Payment</option>
                        <option value="swish">Swish</option>
                        <option value="bankcard">Bank Card</option>
                    </select>

                    {props.paymentMethod === "swish" && (
                        <label htmlFor="phoneNumber">Phone Number:</label>
                    )}
                    {props.paymentMethod === "swish" && (
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={props.phoneNumber}
                            onChange={(e) => props.setPhoneNumber(e.target.value)}
                            required
                        />
                    )}
                    {props.paymentMethod === "bankcard" && (
                        <label htmlFor="bankCard">Bank card:</label>
                    )}
                    {props.paymentMethod === "bankcard" && (
                        <input
                            type="tel"
                            id="bankCard"
                            value={props.bankCard}
                            onChange={(e) => props.setBankCard(e.target.value)}
                            required
                        />
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={props.address}
                        onChange={(e) => props.setAddress(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" onChange={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}
