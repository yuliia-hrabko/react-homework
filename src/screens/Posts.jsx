import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



const Posts = ({users}) => {
  
    const params = useParams();
    const [posts, setPosts] = useState([]);
    
    const fetchPosts = async() => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const data = await res.json();
            setPosts(data);
        }
        catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        if(params?.id ) {
            fetchPosts()
        }
    }, [])

    return (
        
        <div className="container-md px-4 py-5 ">
            {users?.map((user)=> {
                if(user.id == params?.id){
                    return (
                        <h2 key={user.id} className="text-success fw-bold text-center">{user.name}</h2>
                    )
                }
                
            })}
           {posts?.map((item) => {
                if(item.userId == params?.id){
                    return (
                        <ul  key={item.id}>
                            <li>
                                <h3 className="fs-4">{item.title}</h3>
                                <p>{item.body}</p>
                            </li>
                        </ul>
                    )
                }
            })
            }
        </div>
    )
}

export default Posts;