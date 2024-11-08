import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function InsertUser(firstName:string ,email:string ,password:string){
    const res = await prisma.user.create({
        data :{
            firstName,
            email,
            password
        }
    })
    console.log(res) ;
}
async function UpdateUser(email:string ,firstName:string ,lastName:string){
     const res =await prisma.user.update({
        where:{
            email:email
        },
        data :{
            firstName,
            lastName
        }
    })
    console.log("updated successfully .."+res) ;
}

async function ViewData(email:string) {
    const res  = await prisma.user.findFirst({
        where:{
            email
        },
        select:{
            firstName:true,
            lastName:true,
            email:true
        }
    })

    console.log(res) ;
    
} 
// InsertUser("Aadesh","ssr11a@gmail.com","aadesh@123") ;
// UpdateUser("ssr11a@gmail.com" ,"Rishav","Kumar") ;
ViewData("ssr11a@gmail.com") ;