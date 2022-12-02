import { prisma } from "../db/database"

function model() {

    const getOptionById = async(idOption:number) => {
        const optionDb = <any> await prisma.options.findUnique({
            where: { id: idOption },
        })
        return optionDb
    }

    const addVote = async(idOption:number, count:number) => {
        const optionDb = <any> await prisma.options.update({
            where: { id: idOption },
            data: { count: count},
        })
        return optionDb
    }

    // export all function that is in the return
    return { getOptionById, addVote }
}

const OptionModel = model()

export default OptionModel