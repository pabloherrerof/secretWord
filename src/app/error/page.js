"use client";
import { ButtonStyled } from "@/components/Button/ButtonStyled";
import {
  LayoutErrorCard,
  LayoutErrorContainer,
} from "@/components/Layout/LayoutStyled";
import { useRouter } from "next/navigation";
import { MdOutlineErrorOutline } from "react-icons/md";

export default function Error() {
  const router = useRouter();

    return( <>
     <LayoutErrorContainer>
       <LayoutErrorCard>
       <MdOutlineErrorOutline />
         <h1>We are having issues...</h1>
         <ButtonStyled onClick={() => router.push("/")}>
           Try again
         </ButtonStyled>
       </LayoutErrorCard>
     </LayoutErrorContainer>
   </>)
}
