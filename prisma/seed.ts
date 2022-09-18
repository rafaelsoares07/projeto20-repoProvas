import prisma from "../src/database/database"
import { findCategoryById } from "../src/repository/testRepository";

async function main(){
	
	await prisma.categories.upsert({where:{name:"Projeto" },update:{},create:{name:"Projeto"} })
    await prisma.categories.upsert({where:{name:"Prática" },update:{},create:{name:"Prática"} })
    await prisma.categories.upsert({where:{name:"Recuperação" },update:{},create:{name:"Recuperação"} })

    await prisma.terms.upsert({where:{number:1 },update:{},create:{number:1} })
    await prisma.terms.upsert({where:{number:2 },update:{},create:{number:2} })
    await prisma.terms.upsert({where:{number:3 },update:{},create:{number:3} })
    await prisma.terms.upsert({where:{number:4 },update:{},create:{number:4} })
    await prisma.terms.upsert({where:{number:5 },update:{},create:{number:5} })
    await prisma.terms.upsert({where:{number:6 },update:{},create:{number:6} })

    await prisma.teachers.upsert({where:{name:"Diego Pinho" },update:{},create:{name:"Diego Pinho"} })
    await prisma.teachers.upsert({where:{name:"Bruna Hamori" },update:{},create:{name:"Bruna Hamori"} })

    await prisma.disciplines.upsert({where:{name:"HTML e CSS" },update:{},create:{name:"HTML e CSS",termId:1} })
    await prisma.disciplines.upsert({where:{name:"JavaScript" },update:{},create:{name:"JavaScript",termId:2} })
    await prisma.disciplines.upsert({where:{name:"React" },update:{},create:{name:"React",termId:3} })
    await prisma.disciplines.upsert({where:{name:"Humildade" },update:{},create:{name:"Humildade",termId:1} })
    await prisma.disciplines.upsert({where:{name:"Planejamento" },update:{},create:{name:"Planejamento",termId:2} })
    await prisma.disciplines.upsert({where:{name:"Autoconfiança" },update:{},create:{name:"Autoconfiança",termId:3} })

    const sqlQueries = [
    `INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 1) ON CONFLICT DO NOTHING;`,
    `INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 2) ON CONFLICT DO NOTHING;`,
    `INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 3) ON CONFLICT DO NOTHING;`, 
    `INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 4) ON CONFLICT DO NOTHING;`,
    `INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 5) ON CONFLICT DO NOTHING;`,
    `INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 6) ON CONFLICT DO NOTHING;`
    ];

    sqlQueries.forEach(async(sqlRow)=>{
        await prisma.$executeRawUnsafe(sqlRow)
    });
}

main().catch(e=>{
	console.log(e);
	process.exit(1);
}).finally(()=>{
	prisma.$disconnect()
})