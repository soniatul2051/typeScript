import z from 'zod';


const A = z.string();

type A = z.infer<typeof A>;