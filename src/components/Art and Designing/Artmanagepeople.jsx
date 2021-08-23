import React,{useState,useEffect} from "react";
import { Link, NavLink } from "react-router-dom";

import Art from "../Art";
import axios from "axios";
import ArtAddpeople from "./Artaddpeople";

const ArtManagePeople =() => {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
      loadPosts();

  },[]);

const loadPosts = async () => {
  const result = await axios.get("http://localhost:3003/posts");
  setPosts(result.data.reverse());
}
const deletePost = async id => {
  await axios.delete('http://localhost:3003/posts/'+id);
  loadPosts();

}
const getMode = () => {
  return JSON.parse(localStorage.getItem("mode")) || false
}

const[dark,setMode]=useState(getMode())
useEffect(() => {
  localStorage.setItem("mode",JSON.stringify(dark))


},[dark])

 
 
  return (
    <div class={dark ? "main dark-mode" : "main"}>
      <div class="sidebar">
        <ul class="sideul">
        <li> <NavLink to="/DIY">DIY </NavLink></li>
                <li> <NavLink to="/Debate">Debate  </NavLink></li>
                <li><NavLink to="/Enterprenurship">Enterprenurship </NavLink></li>
                <li><NavLink to="/Art">Art and Designing  </NavLink></li>
                <li><NavLink to="/Heritage">Heritage and Environment </NavLink></li>
         
         
        </ul>
      </div>

      <div class="home">
      <div class="nav">
            <label class="switch">
  <input type="checkbox" checked={dark} onChange={()=>setMode(!dark)} />
  <span class="slider round"></span>
</label>

            </div>
            <div class="mainpage">
            <h1 class="heading"> Art and Designing </h1>
        <ul class="homeul">
          <li> <NavLink class="homeb" to="/Artaddpeople">Add People </NavLink>
            
            
          </li>
          <li>
            <a class="homeb" href="#">
              Manage People
            </a>
          </li>
          <li> <NavLink class="homeb" to="/Artaddpost">Add Post</NavLink></li>
          
          
          <li>
            
            <NavLink class="homeb" to="/Artmanagepost">
              Manage Posts
            </NavLink>
          </li>
          <li> <NavLink class="homeb" to="/">Home</NavLink></li>
        </ul>
        <h1 class="title"> Manage People </h1>
        <table class="table">
  <thead class="table-dark">
    <tr>
      <th scope="col">SN </th>
      <th scope="col">Name </th>
      
      
      <th> Action </th>
    </tr>
  </thead>
  <tbody>
    {
       posts.map((post,index)=> (
        <tr>
          <th scope="row"> {index+1} </th>
          <td> { post.name  }</td>
          <td>
          <Link class="edit" to={"/Edituser/"+post.id}
          > Edit   </Link>
             <Link class="delete" onClick={() => deletePost(post.id)}> Delete  </Link></td>
          </tr>
       ))
    }
       
    
    
    
    
    
      
      
  
    
    
    
  </tbody>
</table>
</div>
        
        
        
        
        
        
           
           
      </div>
    </div>
  );
}

export default ArtManagePeople;