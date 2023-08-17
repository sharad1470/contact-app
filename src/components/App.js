
import React, { useState , useEffect} from 'react';
import { BrowserRouter as Router,Routes , Switch,Route} from 'react-router-dom';
import './App.css';
import api from '../api/contacts.js';
import { v4 as uuid } from 'uuid';
import AddContact from './AddContact';
import ContactCard from './ContactCard';
import ConatactList from './ContactList';
import ContactDetails from './ContactDetails';
import Delete from './Delete';
import Edit from './Edit';

import  Header from './Header.js';
import { all } from 'axios';

function App() {
//  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setcontacts]= useState([]);
  const [searchTerm, setSearchTerm]= useState("");
  const [searchResults, setSearchResults]=useState([]);

  const retrieveContacts=async ()=>{

      const response= await api.get("/contacts");

    return response.data;
  };

  const addContactHandler= async (contact) =>{
    //console.log(contact);

    const request={
      id:uuid(), 
      ...contact
    };
    const response=await api.post('/contacts',request);

    setcontacts([...contacts,response.data]);
  };

  const updateContactHandler=async (contact)=>{

    const response=api.put(`/contacts/${contact.id}`, contact);

    setcontacts(
      contacts.map((contact)=>{

        return contact.id===response.id?{...response.data}:contact;
    })
    );

  };

  const removeContactHandler= async (id)=>{

      await api.delete(`/contacts/${id}`);
    const newContactList=contacts.filter((contact)=>{
        return contact.id !==id;
    });

    
    setcontacts(newContactList);
  
  };

  const searchHandler=(searchTerm)=>{
    setSearchTerm(searchTerm);
    console.log(searchTerm);
    

    if(searchTerm!==""){
      const newContactList=contacts.filter((contact)=>{

        return Object.values(contact)
        .join(" ").toLowerCase()
        .includes(searchTerm.toLowerCase());

      });
      setSearchResults(newContactList);
      
    }
    else {
      setSearchResults(contacts);
    }
  };
 
 
  useEffect(()=>{
    
    //alert("yes");
    // const retrieveContacts= JSON.parse(localStorage.getItem("key"));
    // if(retrieveContacts){
    //  // console.log(retrieveContacts)
    //   setcontacts(retrieveContacts);
    // }

    const getAllContacts= async () => {
      const allContacts=await retrieveContacts();

      if(allContacts) setcontacts(allContacts);
    }

    getAllContacts();
    
  
    
 },[]);


 useEffect(()=>{
  
  //localStorage.setItem("key", JSON.stringify(contacts));
  //console.log(i++);
},[contacts]);



 
 


    return (
   
      
      <div className='ui conatainer'>
        
        
        
        
        <Router>
          {/* <Header/> */}
            <Routes>
          

            <Route 
              path='/' 
              exact

              element={<ConatactList contacts={searchTerm.length<1?contacts:searchResults} 
              term={searchTerm}
              searchKeyword={searchHandler}
                />}
                
                //
              />

             

            <Route 
              path='/add' 
              exact
              element={<AddContact addContactHandler={addContactHandler}/>}     
            />

            <Route 
              path='/contact/:id' 
              exact
              element={<ContactDetails/>}     
            />
            
            <Route 
              path='/Delete' 
              exact
              element={<Delete getContactId={removeContactHandler}/>}     
            />
            <Route 
              path='/edit' 
              exact
              element={<Edit updateContactHandler={updateContactHandler}/>}     
            />
        
          </Routes>
        </Router>

      </div>
  );
}

export default App;
