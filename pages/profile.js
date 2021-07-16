import HomePage from "../src/components/Home";

import nookies from 'nookies';
import jwt from 'jsonwebtoken';

export default function Home({githubUser}) {
  return (
    <>
      <HomePage githubUser={githubUser}/>
    </>
  );
}

export async function getServerSideProps (context){
  const cookie = nookies.get(context);
  const token = cookie.USER_TOKEN; 
  const isAuthenticated = await fetch('https://alurakut.vercel.app/api/auth',{
    headers:{
      Authorization: token
    }
  }) 
  .then(response => response.json())
  if(!isAuthenticated){
    return{
      redirect: {
        destination: "/"
      }
    }
  }
  const {githubUser} = jwt.decode(token);

  return{
    props: {
      githubUser
    }
  }
}
