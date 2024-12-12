import { useState } from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";

import "./Post.css";

function Post({ data, onDelete, onUpdate}) {
    const [editing, setEditing] = useState(false);
    function handleUpdatePost(postData){
        setEditing(false);
        onUpdate(postData);
    }
    if (editing) {
        return (
            <article className="post-edit">
                <Form
                    initialPost={data}
                    onSubmit={handleUpdatePost}
                />
                <Button
                    funcionClick={() => setEditing(false)}
                >
                    Cancelar
                </Button>
            </article>
        )
    }
    return (
        <article className="post">
            <h2>{data.title}</h2>
            <p>{data.content}</p>
            <p>{data.owner}</p>
            <Button
                //funcionClick={onDelete}
                funcionClick={() => onDelete(data.id)}
            >
                Eliminar
            </Button>
            <Button
                funcionClick={() => setEditing(true)}
            >
                Editar
            </Button>
        </article>
    )
}

export default Post;