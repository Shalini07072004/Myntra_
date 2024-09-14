import { Button, Card, CardMedia, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
function LogIn(props) {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const UserLogin = async () => {

        const data = new FormData();
        data.append("Email", email)
        data.append("password", password)
        const Response = await axios.get("http://localhost:3008/login/" + email + "/" + password, data, { header: { "content-type": "multipart/form-data" } })

        if (Response.data.status == 'success') {
            alert("login successfull")
            window.location.replace("./");
        }
        else {
            alert("Invalid Email or Password");
        }
    }



    return (
        <div style={{ backgroundColor: '#ffe6e6' }} className='text-center mt-2'>
            <Card className='m-4 col-5 d-inline-block col-5'>
                <CardMedia
                    component="img"

                    height="200"
                    image="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/1/14/d63fc446-4087-4e07-b2dd-1d060368d2661642184399341-Banner_Login-page-400.png"
                    alt="green iguana"
                />
                <div className='col-10 m-auto mt-4'>
                    <Typography className='d-flex justify-content-start'>
                        <p style={{ fontSize: '20px' }}>  <b style={{ fontSize: '25px', color: '#505050', marginRight: '5px' }}>Login</b>  or
                            <b style={{ fontSize: '25px', color: '	#505050', marginLeft: '6px' }}><Link to='/signup' className='text-decoration-none' style={{ color: '#505050', cursor: 'pointer' }}>signup</Link></b></p>

                    </Typography>
                    <div>
                        <input placeholder="email address" className="form-control mb-3" name="Email" onChange={(event) => { setEmail(event.target.value) }}></input>

                        <input placeholder="password " className="form-control" type="password" name="password" onChange={(event) => { setPassword(event.target.value) }}></input>

                    </div>

                    <Typography className='d-flex justify-content-start mt-4'>
                        <p style={{ fontSize: '15px', color: '#707070', textAlign: 'left' }}> By continuing , I agree to the
                            <b style={{ fontSize: '20px', color: '#ff0066', marginLeft: '6px' }}>Terms of use</b> &
                            <b style={{ fontSize: '20px', color: '#ff0066', marginLeft: '6px' }}>Privacy Policy</b></p>
                    </Typography>

                    <Button
                        style={{ backgroundColor: '#ff0066', color: 'white' }}
                        className='col-12'
                    ><b style={{ fontSize: '20px' }}
                    onClick={UserLogin}>CONTINUE</b>
                    </Button>

                    <Typography className='d-flex justify-content-start mt-4'>
                        <p style={{ fontSize: '15px', color: '#707070', textAlign: 'left' }}> Have trouble logging in ?
                            <b style={{ fontSize: '20px', color: '#ff0066', marginLeft: '6px' }}>Get help</b></p>
                    </Typography>
                </div>
            </Card>
        </div>
    )
}

export default LogIn