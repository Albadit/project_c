"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Input } from '@/app/components/input';
import { useRouter } from 'next/navigation'
import { SelectMenu } from '@/app/components/select_menu';

type UserFuntionItems = {
    id: string;
    name: string;
}

const context = {
    logo: { url: "/", img: "/img/antes_logo.png", alt: "antes logo" },
    btn: { text: "Registreer" },
    register: { url: "/terms" }
}

async function Post(data: any) {
    try {
        const response = await fetch('/api/v1/add_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        return responseData
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

export default function Login() {
    const [message, setMessage] = useState('');
    const router = useRouter();

    const [userFunctionData, setData] = useState<UserFuntionItems[]>([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/v1/user_funtion')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const firstName = formData.get('first_name');
        const lastName = formData.get('last_name');
        const userFunction = formData.get('user_function');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm_password');
        const agree = formData.get('agree');

        if (firstName && lastName && userFunction && email && password && confirmPassword) {
            const register = await Post({
                firstName: firstName,
                lastName: lastName,
                userFunctionId: userFunction,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                agree: agree,
            })
            if (register === true) {
                setMessage("Gebruiker toegevoegd");
            } else {
                setMessage(register);
            }
        } else {
            setMessage("De input staat leeg.");
        }
    }

    return (
        <main className='flex flex-col shadow-2xl justify-between w-full md:w-[525px] h-fit gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
            <div className='flex flex-col justify-center gap-3'>
                <h2 className='text-center text-xl font-semibold text-primary'>Voeg een gebruiker toe</h2>
            </div>
            <div className='flex flex-col gap-12 justify-center w-full max-w-[30.625rem] p-5 md:p-12'>
                {!isLoading ? (
                    <>
                        <form onSubmit={handleSubmit} className='flex flex-col justify-center gap-5'>
                            <Input label="Voornaam" name="first_name" type="text" value='' />
                            <Input label="Achternaam" name="last_name" type="text" value='' />
                            <SelectMenu label="Functie" name="user_function" options={userFunctionData} />
                            <Input label="Email" name="email" type="email" value='' />
                            <Input label="Wachtwoord" name="password" type="password" value='' />
                            <Input label="Bevestigen Wachtwoord" name="confirm_password" type="password" value='' />
                            <button type="submit" title="register" className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-base'>Voeg account toe</button>
                        </form>
                    </>
                ) : (
                    <div className='flex flex-col justify-center items-center gap-6 w-full'>
                        <p className="text-xl font-semibold">Loading data...</p>
                    </div>
                )}
            </div>
        </main>
    )
}
