import type { NextApiRequest, NextApiResponse } from 'next';
import OptionModel from '../../models/optionModel';
import VoteModel from '../../models/voteModel';

// type ResponseBody = { result: string | number};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Object>) {
    const { method } = req

    try {

        if(method === 'GET') {
            
            const { id } = req.query

            if(!id) return res.status(405).json({ message: 'error' })

            const vote = await VoteModel.getVoteById(Number(id));

            return res.status(200).json({ vote })
            
        }
        if(method === 'POST') {
            
            const { idVote, idOption } = req.body

            console.log(idVote, idOption)

            const option = await OptionModel.getOptionById(Number(idOption))

            const currentyOption = await OptionModel.addVote(Number(idOption), Number(option.count + 1))

            return res.status(200).json({ result: currentyOption })
            
        }

        return res.status(405).json({ message: 'method Not allowed' })

    } catch(error) {

        console.error(error)
        return res.status(500).end(error)
        
    }

};