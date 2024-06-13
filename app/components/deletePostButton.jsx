"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
const DeletePostButton = ({postId}) => {
    const router = useRouter();
    async function deletePost() {
        try {

            await fetch(`api/post/${postId}`, {
                method: "DELETE"
            })
            router.refresh();
        } catch (e) {
            console.error(e);
        }
    }
  return (
    <button onClick={deletePost}>Delete post</button>
  )
}

export default DeletePostButton