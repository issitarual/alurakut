import MainGrid from '../MainGrid/index';
import { AlurakutMenu } from '../../lib/AlurakutCommons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import WelcomeArea from './welcomeArea';
import ProfileRelationsArea from './profileRelationsArea';
import ProfileArea from './profileArea';

export default function HomePage({githubUser}) {
    const [favoritePeople, setFavoritePeople] = useState([]);
    const [isCommunityLoading, setIsCommunityLoading] = useState(true);
    const [isFriendsLoading, setIsFriendsLoading] = useState(true);
    const [theme, setTheme] = useState(false);
    useEffect(() => {
      const request = axios.get(`https://api.github.com/users/${githubUser}/followers`)
      request.then(success => {
        setFavoritePeople(success.data.map(n => n.login))
        setIsFriendsLoading(false);
      });
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
        setIsCommunityLoading(false);
        setComunnity(completeResponse.data.allCommunities)
      })
      .catch(error => alert("Algo errado aconteceu, tente novamente!"))
      
    }, [githubUser]);
    const [community, setComunnity] = useState([]);
  
    return (
      <>
        <AlurakutMenu githubUser={githubUser} theme={theme} setTheme={setTheme}/>
        <MainGrid >
          <ProfileArea githubUser={githubUser} theme={theme} />  
          <WelcomeArea githubUser={ githubUser } community={community} setComunnity={setComunnity} theme={theme} />
          <ProfileRelationsArea 
            favoritePeople={favoritePeople} 
            community={community} 
            isLoading={{communities: isCommunityLoading, friends: isFriendsLoading}}
            theme={theme}
          />
        </MainGrid>
      </>
    );
  }
