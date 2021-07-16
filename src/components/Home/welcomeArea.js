import Box from '../Box/index';
import { OrkutNostalgicIconSet } from '../../lib/AlurakutCommons';
import { Action } from './extrasStyles';
import { useState } from 'react';

export default function WelcomeArea({ community, setComunnity, githubUser }){
    const [ action, setAction ] = useState('community')
    return(
        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
            <Box >
              <h1 className='title'>
                Bem Vindo(a), {githubUser}
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
                  imageUrl: communityData.get('image'),
                  createSlug: githubUser
                };
                const body = {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(createCommunity)
                }
                fetch('/api/communities', body)
                .then(async (response) => {
                  const data = await response.json();
                  const newCommunity = data.createdRegister;
                  setComunnity([...community, newCommunity]);
                })
                .catch(error => alert("Algum erro ocorreu!"))
              }}>
                <div>
                <Action
                  clicked={action === 'community'} 
                  onClick={(e) => {
                    setAction('community')
                    e.preventDefault();
                  }} 
                >
                  Criar comunidade
                </Action>
                <Action 
                  clicked={action === 'testimonial'} 
                  onClick={(e) => {
                    setAction('testimonial')
                    e.preventDefault();
                  }} 
                >
                  Escrever depoimento
                </Action>
                <Action 
                  clicked={action === 'scrap'} 
                  onClick={(e) => {
                    setAction('scrap') 
                    e.preventDefault()
                  }} 
                >
                  Deixar um scrap
                </Action>
                </div>
                <div>
                  <input 
                    placeholder={action === 'community'? "Qual vai ser o nome da sua comunidade?": 'Qual vai ser o título do seu ' + action + "?"}
                    name="title" 
                    aria-label={action === 'community'? "Qual vai ser o nome da sua comunidade?": 'Qual vai ser o título do seu ' + action + "?"}
                    type="text"
                  />
                </div>
                <div>
                  <input 
                    placeholder={action === 'community'? 'Coloque uma URL para usarmos de capa': 'Coloque aqui o seu ' + action}
                    name="image" 
                    aria-label={action === 'community'? 'Coloque uma URL para usarmos de capa': 'Coloque aqui o seu ' + action}
                    type={action === 'community'? "text": "textarea"}
                  />
                </div>
                <button type="submit">
                  Enviar
                </button>
              </form>
            </Box>
          </div>
    )
}