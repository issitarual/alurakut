import { useRouter } from 'next/router';
import { useState } from 'react';
import nookies from 'nookies';
import React from 'react';

import FooterFormArea from './FooterFormArea';

export default function FormArea(){
    const router = useRouter();
    const [githubUser, setGithubUser] = useState("")
    return(
        <section className="formArea">
            <form className="box" onSubmit={(e) => login(e)}>
            <p>
                Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
            </p>
                <input 
                    placeholder="Usuário" 
                    value={githubUser} 
                    onChange={(e) => {
                        setGithubUser(e.target.value);
                    }}
                />
                <button type="submit">
                Login
            </button>
            </form>
            <FooterFormArea />
        </section>
    )
    function login(e){
        e.preventDefault();
        if(githubUser.trim().length === 0){
            setGithubUser("");
            return alert('Digite o seu usuário!')
        }
        fetch('https://alurakut.vercel.app/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                githubUser: githubUser
            })
        })
        .then(async (sucess) => {
            const response = await sucess.json();
            const token = response.token;
            nookies.set(null, 'USER_TOKEN', token, {
                path: "/profile",
                maxAge: 86400 * 7
            });
            router.push("/profile");
        })
        .catch(error => alert('Algo deu errado, tente novamente!'))
    }
}