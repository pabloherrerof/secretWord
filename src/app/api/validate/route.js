import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

 async function getServerSideProps(context) {
  if (typeof window === 'undefined') {

    const url = new URL(request.url); 
  }

  return { props: {} };
}
export async function GET(request, res, {props}) {
  try {
    const prisma = new PrismaClient();
    console.log(props)
   
    const word = url.searchParams.get('query'); 

    const isValid = await prisma.dictionary.findMany({
        where: {
        word: {
          equals: word
        }
      }
    }) 
   
    if (isValid.length === 0) {
        return new NextResponse(false, {
            status: 202,
            statusText: "Not a valid word",
        });
        } else  return new NextResponse(true, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error validating the word", error);
    return new NextResponse(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
