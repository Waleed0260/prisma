import DeletePostButton from "./deletePostButton"
export default function Posts ({id, title, content, authorName}) {
return (
    <div style={{border: "1px solid white", padding: "15px"}}>
    <div>{authorName}</div>
    <div>{title}</div>
    <div>{content}</div>
    <DeletePostButton postId={id}/>
    </div>
)
}