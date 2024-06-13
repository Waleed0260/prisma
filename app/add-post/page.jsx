"use client"
import React from "react";
import { useState } from "react";
import styles from "../page.module.css"
import Link from "next/link";
export default function AddPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ title, content });
        try {
            fetch('/api/add-post', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, content })
            })
        } catch (e) {

        }
    };

    return (
        <div className={styles.main}>
            <Link href={'/'}> Vied posts</Link>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleTitleChange}
                    />
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    name="content"
                    value={content}
                    onChange={handleContentChange}
                    ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
                    </div>
    )
}