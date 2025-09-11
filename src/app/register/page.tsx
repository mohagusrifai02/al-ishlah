'use client';

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface RegisterForm {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const [form, setForm] = useState<RegisterForm>({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        'https://api-alishlah-production.up.railway.app/api/auth/register',
        form
      );
      alert('Register berhasil');
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.error || 'Terjadi kesalahan');
      } else {
        alert('Terjadi kesalahan yang tidak diketahui');
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
        <div className="container_login">
                <form action="" onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label htmlFor="">Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={form.username}
                                onChange={handleChange}
                                required
                            />
                        </li>
                        <li>
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </li>
                        <li>
                            <label htmlFor="">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                                required
                            />
                        </li>
                        <li>
                            <button type="submit">Register</button>
                        </li>
                    </ul>
                </form>
            </div>
    </>
  );
};

export default Register;