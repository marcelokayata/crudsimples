import axios from 'axios'
import React, {useEffect} from 'react'
//https://www.reactjstutorials.com/react-advanced/20/react-use-callback
const Home = () => {

    useEffect(() => {
        async function apifunc(){
            const data = {
                title: 'foo',
                body: 'bar',
                userId: 1,
            }
            try{
                const post = await axios.post("https://jsonplaceholder.typicode.com/posts", data)
                console.log(post)
            }catch(err){
                console.log(err)
            }
        }
        apifunc()
    }, [])

    // All the JSX will go inside this return
    return(
        <>
            <h1>API Post request using Async await</h1>
        </>
    )
}

export default Home