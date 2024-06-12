import "./BlogCard.css"
import { Link } from "react-router-dom"

const BlogCard = ({id,title, date, content, profile}) => {
  return (
   <Link to= {`/blogpage/${id}`} >
   <div className="card-container">
   <h2>{title}</h2>
   <p>{content.substring(0, 200)}...</p>
   <div className="profile-container">
   <img className="profile-img" src={profile.profilePicture} />
   <span className="name">{profile.name}</span>
   <p className="date">{date}</p>
   </div>
   
   </div>
   </Link>
  )
}

export default BlogCard