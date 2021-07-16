import ProfileSidebar from '../ProfileSidbar.js';

export default function ProfileArea({ githubUser }){
    return(
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
            <ProfileSidebar githubUser={githubUser}/>
        </div>
    )
}