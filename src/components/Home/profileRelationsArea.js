import { ProfileRelationsBoxWrapper } from '../ProfileRelations/index';
import ProfileRelations from './profileRelations';

export default function ProfileRelationsArea({ favoritePeople, community }){
    return(
        <div style={{gridArea: 'profileRelationArea'}}>
        <ProfileRelationsBoxWrapper >
          <ProfileRelations type={'favoritePeople'} data={favoritePeople}/>
        </ProfileRelationsBoxWrapper>
        <ProfileRelationsBoxWrapper >
          <ProfileRelations type={'community'} data={community} />
        </ProfileRelationsBoxWrapper>
      </div>
    )
}