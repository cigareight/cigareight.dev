import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineGithub,AiFillGoogleCircle } from 'react-icons/ai';

function LoginItem () {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const checkUser = async (e) => {
        e.preventDefault();

        const data = {
            username: username,
            email: email,
            password: password
        }

        const url = 'http://localhost:3001/users/get';
        try {
            await axios.post(url, data)
            navigate('/')

        } catch(err) {
            console.log(err)
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


    return(
        <>
            <div className="flex items-center justify-center min-h-screen bg-[#f7f7f7]">
                <div className="bg-[#fff] max-w-sm rounded-md py-3 px-5">
                    <section className="px-4 py-6">
                        <header className="text-2xl font-semibold">
                            Login Page
                        </header>
                    </section>

                    <form onSubmit={checkUser}>

                    <div className={fields.field}>
                            <label className={fields.label}>Username</label>
                            <input type="username" className={fields.input} name="username" id="username" placeholder="your username" required onChange={(e) => setUsername(e.target.value)}/>
                            <small></small>

                        </div>

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
                
                        <button type="submit" className="w-full p-2 bg-slate-200 rounded-md">continue to chat</button>
                    </form>

                    <div className="flex justify-evenly">

                        <button className={button.style}><AiFillGoogleCircle size={30} /></button>

                        <button className={button.style}><AiOutlineGithub size={30} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginItem