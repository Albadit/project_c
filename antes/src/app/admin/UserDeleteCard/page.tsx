import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Input } from '@/app/components/input';
import { SelectMenu } from '@/app/components/select_menu';

type Users = {
    id: string;
    roleId: string;
    userFunctionId: string;
    image: string;
    firstName: string;
    lastName: string;
    bio: null;
    email: string;
    emailVerified: null;
    password: string;
};

type UserFunctionItems = {
    id: string;
    name: string;
}
async function Update(data: any) {
    try {
        const response = await fetch('/api/v1/edit_user', {
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
async function Post(data: any) {
    try {
        const response = await fetch('/api/v1/delete_user', {
            method: 'DELETE',
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
export default function DeleteUser() {
    const [users, setUsers] = useState<Users[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [isPopupVisible1, setPopupVisible1] = useState(false);
    const [isPopupVisible2, setPopupVisible2] = useState(false);
    const [isPopupVisible3, setPopupVisible3] = useState(false);
    const [selectedUser, setSelectedUser] = useState<Users | null>(null);
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [userFunctionData, setData] = useState<UserFunctionItems[]>([]);

    const handleEdit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const id = (selectedUser as Users).id;
        let firstName = formData.get('first_name');
        let lastName = formData.get('last_name');
        let userFunction = formData.get('user_function');
        let email = formData.get('email');
        let password = formData.get('password');
        let confirmPassword = formData.get('confirm_password');
        // const agree = formData.get('agree');

        if (firstName === '-') {
            firstName = (selectedUser as Users).firstName;
        }
        if (lastName === '-') {
            lastName = (selectedUser as Users).lastName;
        }
        if (userFunction === '-') {
            userFunction = (selectedUser as Users).userFunctionId;
        }
        if (email === '-') {
            email = (selectedUser as Users).email;
        }
        if (password === '-') {
            password = (selectedUser as Users).password;
        }
        if (confirmPassword === '-') {
            confirmPassword = (selectedUser as Users).password;
        }

        console.log(id)
        console.log(firstName)
        console.log(lastName)
        console.log(userFunction)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)
        // console.log(agree)
        if (firstName && lastName && userFunction && email && password && confirmPassword) {
            const update = await Update({
                id: id,
                firstName: firstName,
                lastName: lastName,
                userFunctionId: userFunction,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                // agree: agree,
            })
            if (update === true) {
                setMessage("Gebruiker toegevoegd");
            } else {
                setMessage(update);
            }
        } else {
            setMessage("De input staat leeg.");
        }
    }

    const handleDelete = async (e: any) => {
        e.preventDefault();

        const Delete = await Post({
            email: email,
        })
        if (Delete === true) {
            setMessage("Gebruiker verwijderd");
        } else {
            setMessage(Delete);
        }
    }
    const openPopup1 = (user: Users) => {
        setSelectedUser(user);
        setPopupVisible1(true);
    };

    const closePopup1 = () => {
        setSelectedUser(null);
        setPopupVisible1(false);
    };
    const openPopup2 = () => {
        setPopupVisible2(true);
    };

    const closePopup2 = () => {
        setPopupVisible2(false);
    };
    const openPopup3 = () => {
        setPopupVisible3(true);
    };

    const closePopup3 = () => {
        setPopupVisible3(false);
    };
    useEffect(() => {
        fetch('/api/v1/user_funtion')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        fetch('/api/v1/user')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);


    return (
        <main className='flex flex-col shadow-2xl justify-between w-full md:w-[525px] h-fit gap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1'>
            <div className='flex flex-col justify-center gap-3'>
                <p className='text-center text-xl font-semibold text-primary'>Verwijder of bewerk een gebruiker</p>
            </div>
            {!isLoading ? (
                <>
                    <div className='flex flex-wrap justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm'>
                        Kies een gebruiker om te bewerken of te verwijderen:
                        {users.map((user) => (
                            <div key={user.id} className='flex flex-wrap'>
                                <p>{`Naam: ${user.firstName}, Email: ${user.email}`}</p>
                                <div>
                                    <Link href='#popup'>
                                        <p onClick={() => openPopup1(user)}>Klik hier voor meer informatie</p>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    {isPopupVisible1 && (
                        <div id="popup" className="flex flex-col shadow-2xl justify-between w-full md:w-fit h-fitgap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1">
                            <div className="">
                                {selectedUser && <p>{`Naam: ${(selectedUser as Users).firstName}, Email: ${(selectedUser as Users).email}, Achternaam: ${(selectedUser as Users).lastName}`}</p>}
                                <p>Klik op bewerk account om het account te bewerken.</p>
                                <button type="button" onClick={() => openPopup2()} title="delete" className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-base'>Bewerk account</button>
                                {isPopupVisible2 && (
                                    <div id="popup" className="flex flex-col shadow-2xl justify-between w-full md:w-fit h-fitgap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1">
                                        <div className="">
                                            <p>Voor de dingen die u niet wilt veranderen moet u een `-` neerzetten.</p>
                                            <form onSubmit={handleEdit} className='flex flex-col justify-center gap-5'>
                                                <Input label="Voornaam" name="first_name" type="text" value='' />
                                                <Input label="Achternaam" name="last_name" type="text" value='' />
                                                <SelectMenu label="Functie" name="user_function" options={userFunctionData} />
                                                <Input label="Email" name="email" type="email" value='' />
                                                <Input label="Wachtwoord" name="password" type="password" value='' />
                                                <Input label="Bevestigen Wachtwoord" name="confirm_password" type="password" value='' />
                                                <button type="submit" title="register" className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-base'>Bewerk account</button>
                                            </form>
                                            <Link href="">
                                                <p className="close-btn" onClick={closePopup2}>
                                                    Sluit pop-up
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                                <p>Klik op verwijder account om het account te verwijderen.</p>
                                <button type="button" onClick={() => openPopup3()} title="delete" className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-base'>Verwijder account</button>
                                {isPopupVisible3 && (
                                    <div id="popup" className="flex flex-col shadow-2xl justify-between w-full md:w-fit h-fitgap-5 p-7 rounded-lg bg-section text-base font-font1 text-font1">
                                        <div className="">
                                            <p>Weet u zeker dat u dit account wilt verwijderen?</p>
                                            <form onSubmit={handleDelete} className='flex flex-col justify-center gap-5'>
                                                <button type="submit" onClick={() => setEmail((selectedUser as Users).email)} title="delete" className='flex flex-row items-center justify-center w-full lg:w-auto gap-2 px-4 py-3 rounded-lg bg-primary text-font2 font-semibold text-base'>Verwijder account</button>
                                            </form>
                                            <Link href="">
                                                <p className="close-btn" onClick={closePopup3}>
                                                    Sluit pop-up
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                                <Link href="">
                                    <p className="close-btn" onClick={closePopup1}>
                                        Sluit pop-up
                                    </p>
                                </Link>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className='flex flex-col justify-center items-center gap-6 w-full'>
                    <p className='text-xl font-semibold'>Loading data...</p>
                </div>
            )}
        </main >
    );
}