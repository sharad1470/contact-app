import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const Delete=(props) =>{
   
    const location = useLocation()
    const {name,email,id}= location.state;

    return(
        <div className="main">
            <h2>Are you sure U want to Delete Name:{name} Email:{email}</h2>

            <div className="center-div">
                <Link to='/'>
                <button className="ui button Red center"
                    onClick={()=> props.getContactId(id)}
                >
                Yes</button>
                </Link>

                <Link to='/'>
                <button className="ui button blue center">Back to  Contact List</button>
                </Link>
            </div>

        </div>
    );
};

export default Delete;