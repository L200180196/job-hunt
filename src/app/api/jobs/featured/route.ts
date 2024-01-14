import prisma from "../../../../../lib/prisma"
import { NextResponse } from "next/server"


export async function GET() {

    const jobs = await prisma.job.findMany({
        take: 6,
        include:{
            CategoryJob: true,
            Company: {
                include: {
                    CompanyOverview: true
                }
            }
        }
    })
    return NextResponse.json(jobs)

}