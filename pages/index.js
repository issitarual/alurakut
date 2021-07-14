import MainGrid from '../src/components/MainGrid/index';
import Box from '../src/components/Box/index';
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations/index';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ProfileSidebar({githubUser}){
  return(
    <Box as="aside">
      <img src={`https://github.com/${githubUser}.png`} alt="stich" style={{borderRadius: '8px'}}/>
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${githubUser}`}>
          @{githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
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
  const orkutFriends = favoritePeople.slice(0, 6);
  const [community, setComunnity] = useState([]);

  return (
    <>
      <AlurakutMenu githubUser={githubUser}/>
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
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateCommunity(e){
              e.preventDefault();
              const communityData = new FormData(e.target);
              const createCommunity = {
                title: communityData.get('title'),
                image: communityData.get('image')
              };
              setComunnity([...community, createCommunity]);
            }}>
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="image" 
                  aria-label="Coloque uma URL para usarmos de capa"
                  type="text"
                />
              </div>
              <button type="submit">
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div style={{gridArea: 'profileRelationArea'}}>
          <ProfileRelationsBoxWrapper >
            <h2 className='smallTitle'>
              Pessoas da comunidade ({favoritePeople.length})
            </h2>
            <ul>
              {orkutFriends.map((n, i) => {
                return(
                  <li key={i}>
                    <a href={`/users/${n}`}>
                      <img src={`https://github.com/${n}.png`}/>
                      <span>{n}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper >
            <h2 className='smallTitle'>
              Comunidades ({community.length})
            </h2>
            <ul>
              {community.slice(0, 6).map((n, i) => {
                return(
                  <li key={i}>
                    <a href={`/users/${n}`}>
                      <img src={n.image}/>
                      <span>{n.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
