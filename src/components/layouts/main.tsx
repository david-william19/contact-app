import styled from "@emotion/styled";
import Header from "../molecules/headers";
import Modal from "../atom/modal";
import { useState } from "react";

interface MainLayoutProps {
    children: React.ReactNode;
}

const Container = styled.div`
    width: 100%;
`

const MainLayout = ({children}: MainLayoutProps) => {
    const [show, setShow] = useState(true);
    return (
        <Container>
            <Modal show={show} setShow={() => setShow(false)} width="80%" />
            <Header />
            {children}
            <h1>Footer</h1>
        </Container>
    )
}

export default MainLayout;