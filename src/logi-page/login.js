import React from 'react';
import "./loginPgStyle.css";
import { Link } from 'react-router-dom';

const notify = () => {
  alert("log in sucessfull ");
}

function n(){
  
}

function login() {
  return (
    <>
    <div id="bg"></div>
<form>
  <div class="form-field">
    <input type="email" placeholder="University Student Number (USN)" required/>
  </div>
  
  <div class="form-field">
    <input type="text" placeholder="Branch" required/>
  </div>
  
  <div class="form-field"  style={{textAlign:"center" , paddingTop:"20px"}} >
  <center>
    <Link to="/home">
    
    <button onClick={notify} class="btn" style={{textAlign:"center" , }}>Log in</button>
    
    </Link>
    </center>
  </div>
  
</form> 
    </>
  )
}

export default login;
