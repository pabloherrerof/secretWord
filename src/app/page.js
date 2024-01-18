"use client"
import { Container} from "./HomeStyled";
import WordForm from "@/components/WordForm/WordForm";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {

    return (
      <>
          <NavBar/>
          <Container>
            <WordForm />
          </Container>
      </>
    );
  }

