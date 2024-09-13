import React,{useState,useEffect} from 'react'
import { useParams,useNavigate,Link } from 'react-router-dom'
import { API_URL } from "../../Constants";
import Loader from '../../componenets/Loader';


export default function PostDetail() {
    const [post, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

    useEffect(()=>{
        const fetchCurrentPost = async () =>{
            try{
                setLoading(true);
                const response = await fetch (`${API_URL}/${id}`);
                setLoading(false);
                if(response.ok){
                  const Json = await response.json();
                  setPosts(Json);
                  
                }else{
                  throw response;
                }
            }catch(e){
              console.log("Error occured", e);
            }
        };
        fetchCurrentPost();
    },[id]);
    if (!post) return <Loader/>
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to= "/">Back to Posts</Link> <br/>
      <Link to={`/posts/${id}/edit`}>Edit this post</Link>
    </div>
  )
}
