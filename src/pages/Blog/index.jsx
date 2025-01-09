import React, { useEffect, useState } from 'react'
import HeadingSection from './HeadingSection'
import BlogNavigation from './BlogNavigation'
import BlogSection from './BlogSection'

import blogService from '../../services/blog.service'

const index = () => {
  const [blogPosts, setBlogPosts] = useState([])


  const searchBlogs = async (query) => {
      try {
          const response = await blogService.getBlogs(query);
          setBlogPosts(response);
      } catch (error) {
          console.error('Error fetching blogs:', error);
      }
  }

  useEffect(() => {
      document.title = "Blog | Fitzone Webiste";

      const fetchBlogs = async () => {
          try {
              const response = await blogService.getBlogs();
              setBlogPosts(response);
          } catch (error) {
              console.error('Error fetching blogs:', error);
          }
      };

      fetchBlogs();

  }, [])

  return (
    <div>
    <HeadingSection search={searchBlogs}/>
    <BlogNavigation/>
    <BlogSection blogPosts={blogPosts}/>
    </div>
  )
}

export default index