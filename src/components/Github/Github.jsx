import React from 'react'
import { useEffect } from 'react'
// import {useLoaderData} from 'react-router-dom'

function Github() {

    // const data = useLoaderData()

    const [data, setData] = React.useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Sai2909/repos')
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])

  return (
    <>
    {
        data.map(da=>(
           <div>
                <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Repository Name: {da.name}
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Repository Full_Name: {da.full_name}
            </div>
            <img src={da.owner.avatar_url} width={300} alt="" className='rounded-lg' />
            </div>
           </div>
           
        )) 
    }
    </>
  )
}

export default Github


// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     return response.json()
// }