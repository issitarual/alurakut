import { Container } from "./CommunityStyles";
import NextLink from 'next/link'

export default function EachCommunity({community, position, length, theme}){
    const { imageUrl, title, id } = community;
    console.log(position)
    return(
        <Container theme={theme}
            style={{
                borderTopLeftRadius: `${position === 0? '8px': null}`,
                borderTopRightRadius: `${position === 0? '8px': null}`,
                borderBottomLeftRadius: `${position === 6 || position === length - 1? '8px': null}`,
                borderBottomRightRadius: `${position === 6 || position === length - 1? '8px': null}`,
                backgroundColor: `${
                    position%2 === 0 && theme === false?
                    '#D9E6F6': 
                    position%2 === 1 && theme === false? 
                    '#F1F9FE':
                    position%2 === 0 && theme === true?
                    '#2D333B': 
                    position%2 === 1 && theme === true?
                    '#22272E': 
                    null
                }`,
                marginTop: `${position === 0? '16px': null}`,
                marginBottom: `${position === 6 || position === length - 1? '16px': null}`
            }}
        >
            <NextLink href={`/community/${id}`}>
                <img src={imageUrl} alt={title}/>
            </NextLink>
            <div>
                <NextLink href={`/community/${id}`}>
                    <h2>{title}</h2>
                </NextLink>      
                <h3>{Math.floor(Math.random() * (100 - 1)) + 1 + " membros"}</h3>
            </div>
        </Container>
    )
}