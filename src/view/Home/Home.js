import "./Home.css"
import BlogData from "../../data"
import BlogCard from "../../components/BlogCards/BlogCard"

function Home() {
    console.log(BlogData)
  return (
    <>

<h1 className="page-heading">Blogs</h1>

    <div className="cards-container">
    {
    BlogData.map((bdobject,i)=>{
        const {
            id,
            title,
            date,
            content,
            profile
        } = bdobject

        return(
            <>
            
            <BlogCard 
            key={i} 
            id={id}
            title={title} 
            date={date} 
            content={content} 
            profile={profile} />
            
            </>
        )
    })
}
</div>
    </>
  )
}

export default Home