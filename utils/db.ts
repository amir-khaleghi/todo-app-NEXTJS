//serverless environment and connection pooling
/**
 * Every time we make a new client => makes a new connection to the db so we are     caching that connection by attaching it to the global and if there is no one, create a new
 */
//caching that connection by attaching it ot the global

import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
