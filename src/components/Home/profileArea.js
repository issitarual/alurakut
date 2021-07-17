import ProfileSidebar from '../ProfileSidbar.js';

export default function ProfileArea({ githubUser, theme }){
    return(
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
            <ProfileSidebar githubUser={githubUser} theme={theme}/>
        </div>
    )
}