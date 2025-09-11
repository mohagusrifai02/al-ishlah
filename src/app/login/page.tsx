"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface loginForm{
    email:string;
    password:string;
}

const Login= ()=>{

    const [form, setForm]= useState<loginForm>({email:'', password:''});
    const router = useRouter();

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            const res = await axios.post('https://api-alishlah-production.up.railway.app/api/auth/login', form);
            alert('login berhasil');
            console.log("token",res.data.token);

            localStorage.setItem("token", res.data.token);
            router.push('/beranda');
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                alert(err.response?.data?.error || 'terjadi kesalahan');
            } else {
                console.error(err);
                alert('terjadi kesalahan');
            }
        }
    }

    return(
        <>
            <div className="container_login">
                <form action="" onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label htmlFor="">Email</label>
                            <input type="email" name="" id="" onChange={e=> setForm({...form, email:e.target.value})} />
                        </li>
                        <li>
                            <label htmlFor="">Password</label>
                            <input type="password" name="" id="" onChange={e=> setForm({...form, password:e.target.value})}/>
                        </li>
                        <li>
                            <button type="submit">Login</button>
                        </li>
                    </ul>
                </form>
            </div>
        </>
    )
}

export default Login;