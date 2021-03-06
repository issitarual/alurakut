import { ProfileRelationsBoxWrapper } from '../ProfileRelations/index';
import ProfileRelations from './profileRelations';
import Box from '../Box';

export default function ProfileRelationsArea({ favoritePeople, community, isLoading, theme, githubUser }){
    return(
        <div style={{gridArea: 'profileRelationArea'}}>
        <ProfileRelationsBoxWrapper theme={theme}>
          <Box color={theme? '#444C56': '#fff'} isDark={theme}>
            <ProfileRelations type={'favoritePeople'} data={favoritePeople} isLoading={isLoading.friends} theme={theme} githubUser={githubUser}/>
          </Box>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper theme={theme}>
          <Box color={theme? '#444C56': '#fff'} isDark={theme}>
            <ProfileRelations type={'community'} data={community} isLoading={isLoading.communities} theme={theme} githubUser={githubUser}/>
          </Box>
        </ProfileRelationsBoxWrapper>
      </div>
    )
}