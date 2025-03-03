import { useEffect, useState } from "react"

function PostCard({post}) {
  return(
      <div className="group relative">

          <div className="mt-4 flex justify-between">
              <div>
                  <h3 className="text-sm text-gray-700">
                      <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {post.title}
                      </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{post.body}</p>
              </div>
          </div>
      </div>
  )
}
  
export default function Posts() {

  const [posts, setPosts] = useState([])

  function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data))
  }

  useEffect(()=>{
    getPosts()
  }, [])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {posts.map((post) => ( <PostCard key={post.id} post={post} />))}
        </div>
      </div>
    </div>
  )
}
  