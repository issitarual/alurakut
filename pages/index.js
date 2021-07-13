import MainGrid from '../src/components/MainGrid/index';
import Box from '../src/components/Box/index';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations/index';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProfileSidebar({githubUser}){
  return(
    <Box >
      <img src={`https://github.com/${githubUser}.png`} alt="stich" style={{borderRadius: '8px'}}/>
    </Box>
  )
}

export default function Home() {
  const [favoritePeople, setFavoritePeople] = useState([]);
  const githubUser = 'issitarual';
  useEffect(() => {
    const request = axios.get(`https://api.github.com/users/${githubUser}/followers`)
    request.then(success => setFavoritePeople(success.data.map(n => n.login)));
    request.catch(error => alert(`Ocorreu um erro ${error}`));
  }, []);
  const pessoasFavoritas = favoritePeople.slice(0, 6);

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
          <Box >
            <h1 className='title'>
              Bem Vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div style={{gridArea: 'profileRelationArea'}}>
          <ProfileRelationsBoxWrapper >
            <h2 className='smallTitle'>
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((n, i) => {
                return(
                  <li>
                    <a href={`/users/${n}`} key={i}>
                      <img src={`https://github.com/${n}.png`}/>
                      <span>{n}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box >
            Comunidade
          </Box>
        </div>
      </MainGrid>
    </>
  );
}
