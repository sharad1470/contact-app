import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Edit=(props)=>{

    const location=useLocation();
    const [name, setName] = useState(location.state.name);
    const [email, setEmail] = useState(location.state.email);

      
        const {id}=location.state;
      //  setEmail(location.state.email);
        //setName(location.state.name);

    
       
    

     const update= (e) =>{
        e.preventDefault();
        if(name==="" || email===""){
            alert("All fields are mandate");
            return;
        }
        
        const cont={
            id,
            name,
            email
        }
        props.updateContactHandler(cont);
       // this.setState({name:"sh", email:""});
       
       // const navigate = useNavigate()

        //const onClickHandler = () => navigate(`/product/123`)
       window.location = '/';


    };

    

        return(

            <div className="ui main">

                <h2>Add Conatact</h2>
                <form className="ui form" onSubmit={update}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text"
                         name="name" 
                         placeholder="Name"
                         value={name}
                        onChange={(e) => setName(e.target.value)}
                        />

                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type="text" 
                        name="email" 
                        placeholder="Email"
                       value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>

                    <button className="ui button blue">Update</button>
                </form>

            </div>
        );
    }


export default Edit;