import { ProfileRelationsBoxWrapper } from '../ProfileRelations/index';
import ProfileRelations from './profileRelations';

export default function ProfileRelationsArea({ favoritePeople, community, isLoading }){
  console.log(isLoading)
    return(
        <div style={{gridArea: 'profileRelationArea'}}>
        <ProfileRelationsBoxWrapper >
          <ProfileRelations type={'favoritePeople'} data={favoritePeople} isLoading={isLoading.friends}/>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper >
          <ProfileRelations type={'community'} data={community} isLoading={isLoading.communities}/>
        </ProfileRelationsBoxWrapper>
      </div>
    )
}