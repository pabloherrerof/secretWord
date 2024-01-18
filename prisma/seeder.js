import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function loadAndInsertData() {
  try {
    await prisma.$connect();
    
    const response = await fetch("https://random-word-api.herokuapp.com/all?lang=en");
    
    if (!response.ok) {
      throw new Error('Error al obtener datos');
    }

    const words = await response.json();

    for (const word of words) {
      await prisma.dictionary.create({
        data: {
          word: word,
          length: word.length,
        },
      });
      console.log(`Dato insertado: ${word}`);
    }

    console.log('Datos insertados exitosamente.');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

loadAndInsertData();
