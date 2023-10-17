import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterItem () {
    const [username, setUsername] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const saveUser = async (e) => {
        e.preventDefault();

        const data = {
            username: username,
            number: number,
            email: email,
            password: password
        }
        const url = 'http://localhost:3001/users/create'
        try {
            await axios.post(url, data)
            navigate('/login')
        }catch(error) {
            console.log(error)
        }
    }


    const fields = {
        field: 'relative mb-4 items-center',
        input: 'outline-none p-5 border-b-[1px] border-[#e6e6e6] w-full my-4',
        label: 'pl-4',
    }

    const button = {
        style: 'p-2 rounded-md bg-slate-200 my-3'
    }


  return (
    <div className="flex items-center justify-center h-screen">
        <div className="bg-[#fff] max-w-md rounded-md py-3 px-5 border border-[#222121]">
            <section className="px-4 py-6">
                <header className="text-2xl font-semibold">
                    Register Page
                </header>
            </section>

            <form onSubmit={saveUser}>

                <div className="flex justify-between gap-6">
                    <div className={fields.field}>
                        <label className={fields.label}>Username</label>
                        <input type="text" className={fields.input} name="username" id="username" placeholder="your username" required onChange={(e) => setUsername(e.target.value)}/>
                        <small></small>
                    </div>

                    <div className={fields.field}>
                        <label className={fields.label}>Nomor Anda</label>
                        <input type="text" className={fields.input} name="number" id="number" placeholder="your number" required onChange={(e) => setNumber(e.target.value)}/>
                        <small></small>
                    </div>
                </div>

                <div className="flex justify-between gap-6">
                    <div className={fields.field}>
                        <label className={fields.label}>Email</label>
                        <input type="email" className={fields.input} name="email" id="email" placeholder="your email" required onChange={(e) => setEmail(e.target.value)}/>
                        <small></small>

                    </div>
            
                    <div className={fields.field}>
                        <label className={fields.label}>Password</label>
                        <input type="password" className={fields.input} name="password" id="password" placeholder="your password" required onChange={(e) => setPassword(e.target.value)}/>
                        <small></small>
                    </div>
                </div>
        
                <button type="submit" className="w-full p-2 bg-slate-200 rounded-md">continue to chat</button>
            </form>

            <div className="flex justify-between">

                <button className={button.style}>login with google</button>

                <button className={button.style}>login with github</button>
            </div>
        </div>
    </div>
  )
}


export default RegisterItem