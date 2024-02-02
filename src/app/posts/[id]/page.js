import Link from "next/link";
//to generate ssg for dynamic route
export async function generateStaticParams() {
    const result = await fetch("http://localhost:8000/posts");
    const posts = await result.json();

    const paths = posts.map(post=>{
        return{
            id:post.id.toString()
        }
    })
    return{
        paths,
        
    }
    
  }

const PostDetails = async ({ params }) => {
    const id=params.id;
    const result = await fetch(`http://localhost:8000/posts/${id}`)
    const post = await result.json();

   //dynamic route by default SSR
    return (
        <div>
            <h1>Post Details</h1>
            <p>Post ID: {params.id}</p>
            <div key={post.id} className="card w-[70%] mx-auto my-9 bg-grey-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Likes :{post.likeCount}</p>
                    <div className="card-actions justify-end">
                    <Link href='/posts'>
                                    <button className="btn btn-primary">Back</button>
                                </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;