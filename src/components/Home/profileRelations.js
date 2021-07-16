import RelationBox from "./relationBox"

export default function ProfileRelations({ type, data }){
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