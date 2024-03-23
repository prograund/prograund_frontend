import React, { useEffect, useState, useRef } from 'react';
import PostItem from './Post Item/PostItem';

export default function InspectWorld() {
  const url = 'https://mink-keen-equally.ngrok-free.app/professional/';
  // const url = 'http://127.0.0.1:8000/posts/';

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(7);
  const mainBodyRef = useRef(null);

  const getData = async (page) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          "ngrok-skip-browser-warning": "1", // Add this header
          // Include other headers as needed
        }
      });

      // Check if the response is successful
      if (!response.ok) {
        console.error(`Error fetching data: HTTP error! status: ${response.status}`);
        return;
      }

      const data = await response.json();
      const maindata = data.flat();
      const paginatedPosts = maindata.slice(page * postsPerPage, (page + 1) * postsPerPage);
      setPosts(paginatedPosts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

const handleScroll = () => {
  const { scrollTop, clientHeight, scrollHeight } = mainBodyRef.current;
  if (scrollHeight - scrollTop <= clientHeight + 1) {
      // write a funtion to fetch more data and then concat that data with the existing data
      const loadMoreData = async () => {
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              "ngrok-skip-browser-warning": "1", // Add this header
              // Include other headers as needed
            }
          });

          // Check if the response is successful
          if (!response.ok) {
            console.error(`Error fetching data: HTTP error! status: ${response.status}`);
            return;
          }

          const data = await response.json();
          const maindata = data.flat();
          const paginatedPosts = maindata.slice(page * postsPerPage, (page + 1) * postsPerPage);
          setPosts([...posts, ...paginatedPosts]);
          setPage(page + 1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      loadMoreData();
  
    }
  };

  // now we will call the function to fetch all posts
  useEffect(() => {
    getData(page);
  }, [page]);

  useEffect(() => {
    mainBodyRef.current.addEventListener('scroll', handleScroll);
    return () => {
      mainBodyRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-body" ref={mainBodyRef}>
      {loading ? (
        <div className="col-md-12 d-flex justify-content-center">
          <div className="spinner-border text-info m-auto" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <>
          {posts.map((item) => (
            <div key={item.post_id}>
              <PostItem
                title={item.title}
                user_id={parseInt(item.user_id)}
                time={item.uploaded_time}
                image_link={item.file}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
