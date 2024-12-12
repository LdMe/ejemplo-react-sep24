import { useState } from "react";

function Form ({initialPost={title:"",content:"",owner:""},onSubmit}){
    const [post,setPost] = useState(initialPost);

    function handleTitle(e){
        const newTitle = e.target.value;
        setPost(oldPost => {
            const newPost = { ...oldPost };
            newPost.title = newTitle
            return newPost;
        })
    }
    function handleContent(e){
        const newContent = e.target.value;
        setPost(oldPost => {
            const newPost = { ...oldPost };
            newPost.content = newContent;
            return newPost;
        })
        
    }
    function handleOwner(e){
        const newOwner = e.target.value;
        setPost(oldPost => {
            const newPost = { ...oldPost };
            newPost.owner = newOwner;
            return newPost;
        })
        
    }
    function handleSubmit(e){
        e.preventDefault();
        onSubmit(post);
        setPost({
            title:"",
            content:"",
            owner:""
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handleTitle}
                />
                <label htmlFor="content">Content</label>
                <input
                    type="text"
                    name="content"
                    value={post.content}
                    onChange={handleContent}
                />
                <label htmlFor="owner">Owner</label>
                <input
                    type="text"
                    name="owner"
                    value={post.owner}
                    onChange={handleOwner}
                />
                <button>Guardar</button>

            </form>
        </>
    )

}

export default Form