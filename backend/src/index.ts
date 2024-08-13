import {PrismaClient} from '@prisma/client'

const prismaClient = new PrismaClient()

async function main(){
    const user = await prismaClient.user.create({
        data:{
            email: "kauanbarcelos77@gmail.com",
            password: "123456",
            name: "kauan"
        }
    })
}

main()