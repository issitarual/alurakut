import { Container, Path, Pages } from "./CommunitiesListStyle";
import NextLink from 'next/link';
import EachCommunity from "./Community";

export default function CommunitiesList({ communities }){
    return(
        <div>
            <Container>
                <h1>
                    Minhas comunidades
                </h1>
                <Path>
                    <NextLink href="/profile">
                        <span style={{color: '#2E7BB4', cursor: 'pointer'}}>{"Início "}</span>
                    </NextLink>
                    <span style={{color: '#999'}}>{"> Minhas Comunidades"}</span>
                </Path>
                <NextLink href="/profile">
                    <button>Criar Comunidade</button>
                </NextLink>
                <Pages>
                    <div>
                        <span >{"Mostrando "}</span>
                        <span style={{fontWeight: 'bold'}}>{"1 - " + communities.length}</span>
                        <span>{" de "}</span>
                        <span style={{fontWeight: 'bold'}}>{communities.length}</span>
                    </div>
                    <div style={{cursor: 'pointer'}}>
                        {'primeira | < anterior | próxima > | última'}
                    </div>
                </Pages>
                {communities.map((n, i) => <EachCommunity community={n} key={i} length={communities.length} position={i}/>)}
                <Pages>
                    <div>
                        <span >{"Mostrando "}</span>
                        <span style={{fontWeight: 'bold'}}>{"1 - " + communities.length}</span>
                        <span>{" de "}</span>
                        <span style={{fontWeight: 'bold'}}>{communities.length}</span>
                    </div>
                    <div style={{cursor: 'pointer'}}>
                        {'primeira | < anterior | próxima > | última'}
                    </div>
                </Pages>
            </Container>
        </div>
    )
}