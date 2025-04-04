import { drizzle } from "drizzle-orm";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);