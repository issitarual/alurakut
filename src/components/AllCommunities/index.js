import MainGrid from '../MainGrid/index';
import { AlurakutMenu } from '../../lib/AlurakutCommons';
import { useEffect, useState } from 'react';
import ProfileArea from '../Home/profileArea';
import CommunitiesList from './CommunitiesList';

export default function AllCommunities({githubUser}) {
    const [isCommunityLoading, setIsCommunityLoading] = useState(true);
    const [theme, setTheme] = useState(false);
    const [community, setComunnity] = useState([]);

    useEffect(() => {
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
  
    return (
      <>
        <AlurakutMenu githubUser={githubUser} theme={theme} setTheme={setTheme}/>
        <MainGrid theme={theme}>
          <ProfileArea githubUser={githubUser} theme={theme} />  
          <CommunitiesList communities={community}/>
        </MainGrid>
      </>
    );
  }