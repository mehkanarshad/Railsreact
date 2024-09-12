import { API_URL } from "../../Constants";
import React,{useState, useEffect} from "react";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect (() => {
        async function loadPosts (){
            console.log("Hey, I am loadPost and I am being called");
            try{
                const response = await fetch (API_URL);
                console.log(response);
                if(response.ok){
                    const json = await response.json();
                    setPosts(json);
                }else{
                    throw response;
                }
            }catch(e){
                setError("An error occurred.");
                console.log("Error", e);
            }
        }
        loadPosts();
    },[]);
  return (
    <>
        {posts.map ((post) =>(
            <div key = {post.id} className="post-container">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))}
    </>
  );
}

export default PostList;
