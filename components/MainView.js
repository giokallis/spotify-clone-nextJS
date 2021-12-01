import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import {ChevronDownIcon} from "@heroicons/react/outline";

const colors = [
    'from-pink-500',
    'from-yellow-500',
    'from-red-500',
    'from-purple-500',
    'from-green-500',
    'from-blue-500',
    'from-indigo-500',
];

const MainView = () => {
    const {data: session, status } = useSession();
    const [color, setColor] = useState(null);

    useEffect(() => {
        const random = Math.floor(Math.random() * colors.length);
        setColor(colors[random])
    },[]);

    return (
        <div className="flex-grow">
            <header className="absolute top-5 right-8">
                <div className="flex items-center bg-red-300 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
                    <img className="rounded-full w-10 h-10"
                         src={session?.user.image}
                         alt="user-image"/>
                         <h2>{session?.user.name}</h2>
                    <ChevronDownIcon className="h-5 w-5 "/>
                </div>
            </header>
            <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-8 w-full`}>
<h1>Hello </h1>
            </section>
        </div>
    );
};

export default MainView;
