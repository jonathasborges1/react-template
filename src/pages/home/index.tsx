import React from 'react';

interface Props {
    children?: React.ReactNode;
}

const Home: React.FC<Props> = ({ children, ...props }) => {
    return (
        <>
            <h1>Este bloco representa o componente <b style={{color:"#00f"}} >home</b> </h1>
            {children}
        </>
    )
}

export default Home;