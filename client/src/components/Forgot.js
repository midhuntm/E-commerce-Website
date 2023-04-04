import React, { useState } from 'react'
import './Login.css';
import { Grid } from "@mui/material";
import { NavLink,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';
export default function Forgot() {
    const [otpshow,setOtpshow] = useState('none');
    const [otp,setOtp] = useState('');
    const [typeotp,setTypeotp] = useState('');
    const [email,setEmail] = useState('');
    const navigate = useNavigate();
      const [inpval,setInpval] = useState({
        email : '',
        password : ''
    })
      const handleSubmit = async(e) =>{
        e.preventDefault();
        if(email === '')
        {
          alert('please Enter the Email');
        }
        else
        {
          if(Number(otp) === Number(typeotp))
        {
            const res = await fetch('http://localhost:5008/password',{
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    email : email
                })
            });
            console.log(res,'res'); 
            const data = await res.json();
            alert("Password " + "  :  " +data.result);  
            navigate('/');
        }
        else
        {
            alert('OTP is incorrect');
        } 
      }
        }
      const handleOTP =async(e)=>{
        e.preventDefault();
        const res = await fetch('http://localhost:5008/otp',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                email : email
            })
        })
        const data = await res.json();
        if(res.status === 404)
        {
            alert('Please enter the email');
        }
        else if(res.status === 422)
        {
            alert('Invalid Email')
        }
        else if(res.status === 410)
        {
            alert('Something went wrong');
        }
        else
        {
            const OTP = Math.floor(Math.random()*10000);
            alert('OTP '+': '+OTP);
            setOtpshow('flex');
            setOtp(OTP);
        }
      }
  return (
    <div>
      <div className="container">
        <p className="header">Forgot Password</p>
        <form className="forms">
          <Grid
            container
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "100px",
            }}
          >
            <Grid item sm={2} md={2} xs={12}>
              <label for="exampleInputPassword1" class="form-label labels">
                Email address
              </label>
            </Grid>
            <Grid item sm={10} md={10} xs={12}>
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value = {email}
                class="form-control"
                id="email"
                className="inputs"
              />
            </Grid>

            <Grid item sm={2} md={2} xs={12} style={{display : `${otpshow}`}}>
              <label for="exampleInputPassword1" class="form-label labels">
                OTP
              </label>
            </Grid>
            <Grid item sm={10} md={10} xs={12} style={{display : `${otpshow}`}}>
              <input
                type="text"
                name="email"
                class="form-control"
                id="email"
                className="inputs2"
                onChange={(e) => setTypeotp(e.target.value)}
              />
            </Grid>
          </Grid>
          <button className="register1" onClick={handleOTP}>Send OTP</button>
          <button
            className="login-btn"
            type="submit"
            onClick={handleSubmit}
            style={{ marginLeft: "20px", marginTop: "50px" }}
          >
            submit
          </button>
        </form>  
      </div>
    </div>
  );
}
