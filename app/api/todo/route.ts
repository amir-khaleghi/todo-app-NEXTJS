import { NextResponse } from 'next/server';
// import database
import db from '@/utils/db';

/* Get __________________________________________________ */
export const GET = async (request: Request) => {
  const todos = await db.todo.findMany({});
  return NextResponse.json({ data: todos });
};
/* Post _________________________________________________ */
export const POST = async (request: Request) => {
  const data = await request.json();
  const todo = await db.todo.create({
    data,
  });

  return NextResponse.json({ message: todo });
};
