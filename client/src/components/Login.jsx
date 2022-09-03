import React, { useState } from 'react';

import syles from '../css/Login.module.css';

const serverURL = 'http://localhost:4000/'

export default function Login() {
    return <>
        <div className="container">
            <h4>Login</h4>
            <hr />
            <form onSubmit={async (e) => {
                e.preventDefault();
                
                let data = new FormData(e.target);
                let dataObject = {};
                data.forEach((value, key) => {
                    dataObject[key] = value;
                })

                fetch(serverURL, {
                    method: 'post',
                    body: JSON.stringify(dataObject),
                    headers: {
                        'Content-Type': 'application/x-www-urlencoded',
                    }
                }).then(res => {
                    console.log("Response recieved");
                    console.log(res);
                })
            }}>
                <input name='email' type='email' placeholder='Email'/>
                <br/>
                <input name='password' type='password' placeholder='Password'/>
                <br/>
                <input type='submit' value={'Submit'}/>
            </form>
        </div>
    </>;
}
