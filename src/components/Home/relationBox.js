export default function RelationBox({data, key, type}){
    return(
        <>
            <li key={key}>
            <a href={type === 'community'? `community/${data.id}`:`/user/${data}`}>
                <img src={type === 'community'? data.imageUrl:`https://github.com/${data}.png`}/>
                <span>{type === 'community'? data.title: data}</span>
            </a>
            </li>
        </>
    )
}