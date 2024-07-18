import { NextResponse } from "next/server";
import { mysqlPool } from "@/utils/db";

export async function GET(req) {
  const promisePool = mysqlPool.promise()
  const [rows, fields] = await promisePool.query(
    `SELECT * FROM Events;`
  )
  return NextResponse.json(rows)
}