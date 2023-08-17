import React from "react";
import { Link } from 'react-router-dom';

const ContactCard= (props) => {

        const {id,name, email}=props.contact;
    return (

    <div className="item">
        <div className="content">
        <Link to={`/contact/${id}`} state={props.contact}>
            <div className="header">{name}</div>
            <div>{email}</div>
        </Link>
        </div>

        <div>
         <Link to={"/Delete"} state={props.contact}>
        <i className="trash alternate outline icon"
            style={{color: "red" , marginTop: "7px" ,marginLeft:"10px"}}
            //onClick={()=> props.deleteitem(id)}
        >

        </i>
        </Link>

        <Link to={"/Edit"} state={props.contact}>
        <i className="edit alternate outline icon"
            style={{color: "red" , marginTop: "7px"}}
            //onClick={()=> props.deleteitem(id)}
        >

        </i>
        </Link>
        </div>


    </div>
    );
};

// onClick={()=> props.deleteitem(id)}
export default ContactCard;