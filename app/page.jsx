import Image from "next/image";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import Posts from "./components/posts";
import Link from "next/link";
async function getPosts() {
  const posts = await prisma.post.findMany({
    where:
    {published: true},  
    include:{
    author: {
      select: {name: true}
    }}
  })
  return posts;
}
export default async function Home() {
  const posts = await getPosts();
  console.log({posts})
  return (
    <main className={styles.main}>
      <h1>Hello</h1>
      <Link href={"/add-post"}>add post</Link>
      {posts.map((item)=>{
        return(
          <Posts key={item.id} id={item.id} title={item.title} authorName={item.author.name} content={item.content}/>
        )
      })}
    </main>
  );
}
