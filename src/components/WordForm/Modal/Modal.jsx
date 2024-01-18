"use client"
import dynamic from 'next/dynamic';
import { ButtonStyled } from "@/components/Button/ButtonStyled"
import { LottieContainer, ModalContainer } from "./ModalStyled"

import WinLottie from "../../../assets/Win.json"
import LooseLottie from "../../../assets/Loose.json"
import { handleRestart } from "../utils"

const Lottie = dynamic(() => import('react-lottie-player'), {
    ssr: false,
  });
  
export const Modal = ({win, restart, word}) => {
    return (
        <ModalContainer>
            <LottieContainer>
            <Lottie
      loop
      animationData={win ? WinLottie : LooseLottie}
      play
      style={{ width: 100, height: 100 }}
    />
            </LottieContainer>
            <div>
            <h2>{win ? "You won!" : "Game Over"}</h2>
            <p>word: <span>{word}</span></p>
            </div>
        <ButtonStyled
        color="white"
        backgroundcolor="black"
        onClick={()=> restart()}>
            Play again
        </ButtonStyled>
        </ModalContainer>
    )
}
