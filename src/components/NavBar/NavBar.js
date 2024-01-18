"use client"
import styled from "styled-components";

const Nav = styled.nav`
    background-color: white;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-family:'American typewriter', sans-serif !important;

        font-size: 2rem;
    }
`;

export default function NavBar() {


    return (
        <Nav>
            <h1>secret-word</h1>
        </Nav>
    );
    }