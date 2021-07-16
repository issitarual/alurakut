import LogoArea from './LogoArea';
import FormArea from './FormArea';
import FooterArea from './FooterArea';

export default function SignIn(){
    return(
        <main style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <div className="loginScreen">
                <LogoArea />
                <FormArea />
                <FooterArea />
            </div>
        </main>
    )
}