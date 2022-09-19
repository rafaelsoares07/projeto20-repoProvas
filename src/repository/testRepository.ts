import prisma from "../database/database"

import {ITestCreate} from "../types/testTypes"

export async function findCategoryById(categoryId:number) {
    
    const result = await prisma.categories.findUnique({where:{id:categoryId}})

    return result

}

export async function findTeacherDiciplineById(teacherDisciplineId:number) {

    const result = await prisma.teachersDisciplines.findUnique({where:{id:teacherDisciplineId}})

    return result

}

export async function createTest(test:ITestCreate) {

    const result = await prisma.tests.create({data:test})

    return result

}

export async function getAllByDiscipline() {
    
    const result = await prisma.terms.findMany({
        select: {
          number: true,
          disciplines: {
            select: {
              name: true,
              teachersDisciplines: {
                include: {
                  teachers: {
                    select: {
                      name: true,
                    },
                  },
                  tests: {
                    include: {
                      categories: {
                        select: {
                          name: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });

    return result
}

export async function getAllByTeacher() {
    
    const result = await prisma.teachers.findMany({
        select:{
            id:true,
            name:true,
            teachersDisciplines:{
                include:{
                    disciplines:true,
                    tests:{
                        include:{
                            categories:true
                        }
                    }
                    }
                }
            }
            
        }
    )
        

    return result

}
