import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const ContactDetails=() =>{
   // console.log(props);
    const location = useLocation()
    const {name , email}= location.state;
    return(
        <div className="main">
            <div className="ui card centered">
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description"></div>
                </div>
            </div>

            <div className="center-div">
                <Link to='/'>
                <button className="ui button blue center">Back to  Contact List</button>
                </Link>
            </div>

        </div>
    );
};

export default ContactDetails;