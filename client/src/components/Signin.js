import { Grid } from "@mui/material";
import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
export default function Signin() {
    const navigate = useNavigate();
    const [inpval,setInpval] = useState({
        name : '',
        email : '',
        password : ''
    })
    const handleSubmit = async(e) => {
        e.preventDefault(); 
        const{name,email,password} = inpval;
        const res = await fetch('http://localhost:5008/post',{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                name ,email ,password 
            })
        })
        const data = await res.json();
        console.log(data);
        if(res.status === 422)
        {
            alert('Please Fill the Form');
        }
        else if(res.status === 404)
        {
            alert('This email already exists');
        }
        else        
        {
            alert('Registered');
            navigate('/')
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
        <p className="header">Signin</p>

        <form className="forms">
        <Grid container style={{alignItems : 'center',justifyContent : 'center',marginLeft : '100px'}}>
                <Grid item sm ={2} md={2} xs={12}>
                    <label for="exampleInputEmail1" class="form-label labels">
                    Name
                    </label>
                </Grid>
                <Grid item sm ={10} md={10} xs={12}>
                        <input
                        type="text"
                        name="name"
                        onChange={setdata}
                        value={inpval.name}
                        class="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        className="inputs"
                        /> 
                </Grid>
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
            Signin
          </button>
        </form>
  
      </div>
    </div>
  );
}


