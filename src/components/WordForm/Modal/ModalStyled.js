import styled from "styled-components";

export const ModalContainer = styled.div`
   transition:all 0.3s ease;
    
    &.fade:hover{
    opacity:0.5;
}
    position: fixed;
    z-index: 1000;
    background-color: white;
    width: 300px;
    height: 300px;
    border-radius:50%;
    margin: 0 auto;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    justify-content: space-around;
    padding: 1rem 2rem;
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
    transition: all 0.3s ease-in-out;
   h2 {
         font-size: 1.5rem;
            font-weight: 600;
            text-transform: uppercase;
            color: #000;
            font-family: "Futura";
            margin-bottom: 0.5rem;
    }
    p{
        font-size: 1rem;
        font-weight: 400;
        color: grey;
        font-family: "Futura";
        margin-bottom: 0.5rem;
    }
    span{
        font-size: 1%.2;
        font-weight: 600;
        color: #000;
        font-family: "American Typewriter";
        text-transform: uppercase;
        margin-bottom: 0.5rem;
    }
    `;


export const LottieContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
 
    `;

  

    