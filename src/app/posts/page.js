import Link from 'next/link';
import React from 'react';
import styles from './Post.module.css';

const AllPosts = async () => {
    const result = await fetch('http://localhost:8000/posts', {
        //cache:"force-cache",
        // next:{
        //     revalidate:5
        // }
        cache: "no-store"
    });
    const posts = await result.json();

    return (
        <div className='w-full'>
            <h1 className={styles.header_text}>Posts:{posts.length}</h1>
            <div >
                {posts.map(post => (
                    <div key={post.id} className="card w-[70%] mx-auto my-9 bg-grey-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{post.title}</h2>
                            <p>{post.description}</p>
                            <p>Likes :{post.likeCount}</p>
                            <div className="card-actions justify-end">
                                <Link href={`/posts/${post.id}`}>
                                    <button className="btn btn-primary">Details</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPosts;