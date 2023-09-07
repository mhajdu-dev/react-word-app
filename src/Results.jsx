import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const url = 'https://wordsapiv1.p.rapidapi.com/words/hour'

const Results = () => {
    const response = useQuery({
        queryKey: ['words'],
        queryFn: async () => {
            const result = await axios({
                "method": "GET",
                "url": url,
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                    "x-rapidapi-key": "590ed10c17mshf160d5110b5e455p15df53jsn2801c960e691"
                }
            })
            return result.data
        }
    })
    console.log(response);
    return (
        <div>Results</div>
    )
}

export default Results