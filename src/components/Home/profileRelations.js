import RelationBox from "./relationBox";
import Loader from "react-loader-spinner";

export default function ProfileRelations({ type, data, isLoading, theme }){
    return(
        <>
            <div style={{display: 'flex'}}>
                <h2 className='smallTitle' style={{marginRight: '3px'}}>
                    {type === 'community'? "Minhas Comunidades" : 'Meus amigos'} 
                </h2>
                <h2 className='smallTitle' style={{color: '#2E7BB4', cursor: 'pointer'}}>
                    ({data.length})
                </h2>
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
            <h2 
                className="smallTitle" 
                style={{
                    marginTop: '10px',
                    marginBottom: '0px',
                    color: '#2E7BB4',
                    cursor: 'pointer'
                }}>Ver todos</h2>
        </>
    )
}