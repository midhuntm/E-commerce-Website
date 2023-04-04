import React, { useEffect, useState } from 'react'
import {PRODUCTS} from '../../products';
import Product from './Product';
import { Grid,Box } from '@mui/material';
import { useMediaQuery } from 'react-responsive'
import './Shop.css';
import hands from '../../asset/Hands.png';
export default function Shop() {
  const [name,setName] = useState('');
  const gridStyle = { 
    display: "grid",
    gridTemplateColumns: '1fr 1fr 1fr 1fr ',
  };
  const gridStyle2 = {
    display: "grid",
    gridTemplateColumns: '1fr',
  };
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(min-width: 351px)' })
  const isRetina = useMediaQuery({ query: '(max-width :350px)' })
  const email = localStorage.getItem('user');
  const getName = async() => {
    const res = await fetch(`http://localhost:5008/getname/${email}`,{
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json'
      }
    })
    const data = await res.json();
    setName(data.result);
  }
  useEffect(() => {
    getName();
  },[PRODUCTS])
  return (
    <>
        <div className='shopTitle'>
            <p>PedroTech Shop</p>
        </div>
        <div style={{display : 'flex',alignItems : 'center'}}>
          <h5 className='pname'>{`Hello ${name}`}</h5>
          <img src={hands} style={{height : '50px',width : '50px'}}/>
        </div>
        { isRetina && <div style={gridStyle2} className='products'>
            {PRODUCTS.map((product,index) => (
                  <div key={index}>
                  <Product datas={product}/>
                  </div>
            ))}
          </div>  }      
            { 
              isPortrait && <div style={gridStyle} className='products'>
              {PRODUCTS.map((product,index) => (
                    <div key={index}>
                    <Product datas={product}/>
                    </div>
              ))}
            </div>
            }

    </>
  )
}

