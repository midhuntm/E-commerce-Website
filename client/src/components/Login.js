import React, { useState } from 'react'
import './Login.css';
import { Grid } from "@mui/material";
import { NavLink,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';

export default function Login() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
      const [inpval,setInpval] = useState({
        email : '',
        password : ''
    })
    const handleSubmit = async(e) => {
        const {email,password} = inpval;
        e.preventDefault(); 
        const {name,value} = e.target;
        const res = await fetch('http://localhost:5008/login',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email,password
            })
        })
        const data = await res.json();
        console.log(data);
        if(res.status === 404)
        {
            alert('Please Enter the Email & Password');
        }
        else if(res.status === 422)
        {
            alert('This Email Doesn\'t have Account');
        }
        else
        {
            alert('Logged');
            dispatch(authActions.login());
            sessionStorage.setItem('user',true)
            navigate('/home');
            localStorage.setItem('user',inpval.email);
        }
      }
    const setdata = (e) =>{
        console.log(e.target.value);
        const {name,value} = e.target;
        setInpval((preval) => {
            return{
                ...preval,
                [name] : value
            }
        });
        console.log(inpval);    
      }
      
  return (
    <div>
    <div className="container">
      <h1 className="header">Login</h1>
      <form className="forms">
      <Grid container style={{alignItems : 'center',justifyContent : 'center',marginLeft : '100px'}}>
              <Grid item sm ={2} md={2} xs={12}>
                      <label for="exampleInputPassword1" class="form-label labels">
                      Email address
                      </label>
              </Grid>
              <Grid item sm ={10} md={10} xs={12}>
                      <input
                      type="text"
                      name="email"
                      onChange={setdata}
                      value={inpval.email}
                      class="form-control"
                      id="email"
                      className="inputs"
                      />
              </Grid>
              <Grid item sm ={2} md={2} xs={12}>
                      <label for="exampleInputPassword1" class="form-label labels">
                      Password
                      </label>
              </Grid>
              <Grid item sm ={10} md={10} xs={12}>
                      <input
                      type="password"
                      name="password"
                      onChange={setdata}
                      value={inpval.password}
                      class="form-control"
                      id="email"
                      className="inputs"
                      />
              </Grid>
        </Grid>
        <button className="login-btn" type="submit" onClick={handleSubmit} style={{marginLeft : '20px',marginTop : '50px'}}>
          Login
        </button> 
      </form>
      <NavLink to='/signin'><button className='register1'>Register</button></NavLink> 
      <NavLink to='/forgot'><p style={{color : 'white',cursor : 'pointer'}}>Forgot Password?</p></NavLink>
    </div>
  </div>
  )
}
