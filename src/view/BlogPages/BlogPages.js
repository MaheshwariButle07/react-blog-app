import "./BlogPages.css"
import { useParams } from "react-router-dom"
import Data from "./../../data"

function BlogPages ()  {

    const {id}= useParams()

    const selectedId = Data.find((dataObject)=>dataObject.id===id)

    return (
    <>
       <h1>{selectedId.title}</h1>
       <div className="profile-info">
       <img src={selectedId.profile.profilePicture} className="profile-image"/>
       <p  className="blogname">{selectedId.profile.name}</p>
       </div>
       <p className="blogdate">{selectedId.date}</p>
       <p>{selectedId.content}</p>
    </>
  )
}

export default BlogPages