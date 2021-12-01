import React from 'react';
import {getProviders, signIn} from "next-auth/react";

const Login = ({providers}) => {
    return (
        <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
            <img className="w-52 mb-5" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="logo"/>
            {Object.values(providers).map((provider) => {
                return(
                    <div key={provider.key}>
                    <button
                        className="bg-[#18D860] text-white p-5 rounded-full"
                        onClick={() => signIn(provider.id, {callbackUrl: "/"})}
                    >
                        Login with {provider.name}
                    </button>
                </div>)
            })}
        </div>
    );
};

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        },
    };
}
