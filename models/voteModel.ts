import { prisma } from "../db/database"

function model() {

    const getVoteById = async(voteId:number) => {
        const voteDb = <any> await prisma.votes.findUnique({
            where: { id: voteId },
            include: { options: true }
        })
        return voteDb
    }

    // export all function that is in the return
    return { getVoteById }
}

const VoteModel = model()

export default VoteModel