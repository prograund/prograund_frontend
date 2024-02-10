import React, { useEffect, useState } from 'react'
import PostItem from './Post Item/PostItem';

export default function InspectWorld() {
  const url = 'http://127.0.0.1:8000/posts/';

  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {posts.map((item) => (
        <div className="post" key={item.post_id}>
          <PostItem title={item.title}/>
        </div>
      ))}
    </>
  );
}


