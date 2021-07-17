import Box from '../Box/index';
import { AlurakutProfileSidebarMenuDefault } from '../../lib/AlurakutCommons';

export default function ProfileSidebar({githubUser, theme }){
    return(
      <Box as="aside" color={theme? '#444C56': '#fff'}>
        <img src={`https://github.com/${githubUser}.png`} alt="stich" style={{borderRadius: '8px'}}/>
        <hr />
        <p>
          <a className="boxLink" href={`https://github.com/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />
        <AlurakutProfileSidebarMenuDefault theme={theme} />
      </Box>
    )
  }