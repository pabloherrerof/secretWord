// pages/api/check-connection.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function GET(request) {
  try {
    await prisma.$connect();
    console.log("Hoal");
    return Response.json({ connected: true })
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
    return Response.json({ connected: false });
  } finally {
    await prisma.$disconnect();
  }
}