import RelationBox from "./relationBox";
import Loader from "react-loader-spinner";
import NextLink from 'next/link';

export default function ProfileRelations({ type, data, isLoading, theme, githubUser }){
    return(
        <>
            <div style={{display: 'flex'}}>
                <h2 className='smallTitle' style={{marginRight: '3px'}}>
                    {type === 'community'? "Minhas Comunidades" : 'Meus amigos'} 
                </h2>
                <NextLink href={`communities/${githubUser}`}>
                    <h2 className='smallTitle' style={{color: theme? '#539BF5':'#2E7BB4', cursor: 'pointer'}}>
                        ({data.length})
                    </h2>
                </NextLink> 
            </div>
            <Loader
                type="Puff"
                color="#6F92BB"
                height={100}
                width={100}
                visible={isLoading}
                timeout={3000}
                style={{textAlign: 'center'}}
            />
            <ul>
                {data.slice(0, 6).map((n, i) => <RelationBox key={i} data={n} type={type}/>)}
            </ul>
            <NextLink href={`communities/${githubUser}`}>
                <h2 
                className="smallTitle" 
                style={{
                    marginTop: '10px',
                    marginBottom: '0px',
                    color: theme? '#539BF5':'#2E7BB4',
                    cursor: 'pointer'
                }}>Ver todos</h2>
            </NextLink>
        </>
    )
}