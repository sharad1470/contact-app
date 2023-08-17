import React ,{ useRef }from "react";
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList= (props)=> {

        const inputEl=useRef("");
        const rendercontactList= props.contacts.map((contact) =>{
            return (

               <ContactCard contact={contact} deleteitem={props.getContactId} key={contact.id}/>
            );
        
        });

        // const getSearchTerm=()=>{
        //     props.searchKeyword(inputEl.current.value);

        // }
    return (
        <div className='main'>
            <h2>
                Contact list
                <Link to="/add">
                    <button className="ui button blue right">Add Contact</button>
                </Link>
            </h2>

            <div className="ui search">
                <div className="ui icon input">
                    <input type="text"
                    //ref={inputEl}
                     placeholder="Search contact" 
                     className="prompt"
                     value={props.term}
                     //onchange={getSearchTerm}
                     onChange={(e) =>(props.searchKeyword(e.target.value)
                        )}
                     />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">

                {rendercontactList}
            </div>

        </div>
    );
};

export default ContactList;