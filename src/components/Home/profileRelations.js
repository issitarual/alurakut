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
                {data.slice(0, 6).map((n, i) => {
                return(
                    <li key={i}>
                    <a href={type === 'community'? `community/${n.id}`:`/user/${n}`}>
                        <img src={type === 'community'? n.imageUrl:`https://github.com/${n}.png`}/>
                        <span>{type === 'community'? n.title: n}</span>
                    </a>
                    </li>
                )
                })}
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