import MainGrid from '../MainGrid/index';
import { AlurakutMenu } from '../../lib/AlurakutCommons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import WelcomeArea from './welcomeArea';
import ProfileRelationsArea from './profileRelationsArea';
import ProfileArea from './profileArea';

export default function HomePage({githubUser}) {
    const [favoritePeople, setFavoritePeople] = useState([]);
    useEffect(() => {
      const request = axios.get(`https://api.github.com/users/${githubUser}/followers`)
      request.then(success => setFavoritePeople(success.data.map(n => n.login)));
      request.catch(error => alert(`Ocorreu um erro ${error}`));
  
      const body = {
        method: 'POST',
        headers: {
          'Authorization': 'c63cccb514a6fd1c43e2d726913189',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ "query": `query {
          allCommunities {
            id
            title
            createSlug
            imageUrl
          }
        }` })
      }
  
      fetch("https://graphql.datocms.com/", body)
      .then((sucess) => sucess.json())
      .then(completeResponse => {
        setComunnity(completeResponse.data.allCommunities)
      })
      .catch(error => alert("Algo errado aconteceu, tente novamente!"))
      
    }, [githubUser]);
    const [community, setComunnity] = useState([]);
  
    return (
      <>
        <AlurakutMenu githubUser={githubUser}/>
        <MainGrid>
          <ProfileArea githubUser={githubUser}/>  
          <WelcomeArea githubUser={ githubUser } community={community} setComunnity={setComunnity}/>
          <ProfileRelationsArea favoritePeople={favoritePeople} community={community}/>
        </MainGrid>
      </>
    );
  }