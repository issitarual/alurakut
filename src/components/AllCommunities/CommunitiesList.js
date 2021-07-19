import { Container, Path, Pages } from "./CommunitiesListStyle";
import NextLink from 'next/link';
import EachCommunity from "./Community";

export default function CommunitiesList({ communities, theme }){
    return(
        <div>
            <Container theme={theme}>
                <h1>
                    Minhas comunidades
                </h1>
                <Path>
                    <NextLink href="/profile">
                        <span style={{color: `${theme? '#cccccc': '#2E7BB4'}`, cursor: 'pointer'}}>{"Início "}</span>
                    </NextLink>
                    <span style={{color: `${theme? '#ADBABD': '#999'}`}}>{"> Minhas Comunidades"}</span>
                </Path>
                <NextLink href="/profile">
                    <button>Criar Comunidade</button>
                </NextLink>
                <Pages theme={theme}>
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
                {communities.map((n, i) => <EachCommunity community={n} key={i} length={communities.length} position={i} theme={theme}/>)}
                <Pages theme={theme}>
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