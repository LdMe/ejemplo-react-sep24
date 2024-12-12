import { useState } from "react";

import Post from "../Post/Post";
import Form from "../Form/Form";
import styles from "./Blog.module.css";

function Blog() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "primer post",
            content: "contenido del primer post",
            owner: "yo mismo"
        }
    ])
    const [lastId, setLastId] = useState(1);
    function handleNewPost(data) {
        const newPost = { ...data, id: lastId + 1 };
        setLastId(lastId => lastId + 1);
        setPosts(oldPosts => [newPost, ...oldPosts]);
    }
    function handleDeletePost(id) {
        setPosts(oldPosts => oldPosts.filter(post => post.id !== id));
    }
    function handleUpdatePost(editedPost){
        console.log(editedPost);
        setPosts(oldPosts=> oldPosts.map(post=>{
            if(post.id !== editedPost.id){
                return post;
            }else{
                return editedPost;
            }
        }))
    }
    return (
        <section className={styles.blog}>
            <h1>Mi blog</h1>
            <section className="new-post">
                <Form
                    onSubmit={handleNewPost}
                />
            </section>
            <section className="posts">
                {posts.map(post => (
                    <Post
                        data={post}
                        key={post.id}
                        //onDelete={()=>handleDeletePost(post.id)}
                        onDelete={handleDeletePost}
                        onUpdate={handleUpdatePost}
                    />
                ))}
            </section>
        </section>
    )
}

export default Blog;