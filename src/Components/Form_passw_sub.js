import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Sign(){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cnfrmpassword,setCnfrmpassword]=useState('');
    const nav=useNavigate();


    const handleSubmit=(e)=>{
        e.preventDefault();

        if(password!==cnfrmpassword){
            alert( "password dosen't match")
        }else if(password===""){
            alert("input field dosen't empty")
        }else{
            alert("Successfully regirer")
            let data={name,email,password,cnfrmpassword}
            axios.post('http://127.0.0.1:8000/user',(data))
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err));
            nav('/home')
        }

    }

    return <div>
         <div className="form">
            <form onSubmit={handleSubmit}>
            <div className="modal">
                <input type='text' placeholder="Name"  value={name} onChange={(e)=>{setName(e.target.value)}}/> <br/>
               
                <input type='text' placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br/>
                
                <input type='password' placeholder="*password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br/>
             
                <input type='password' placeholder="*confirm Password" value={cnfrmpassword} onChange={(e)=>{setCnfrmpassword(e.target.value)}}/> <br/>
                
            <div className="rw">                
                <button >Signup</button>
                    
            </div>
            </div>
            </form>

        </div>

    </div>
}