import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import blogService from '../../services/blog.service'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


    const SinglePost = () => {
        const { id } = useParams();
        const [blog, setBlog] = useState(null);

        useEffect(() => {
            const fetchBlog = async () => {
                try {
                    const data = await blogService.getBlogById(id);
                    setBlog(data);
                } catch (error) {
                    console.error('Error fetching blog post:', error);
                }
            };

            fetchBlog();
        }, [id]);

        if (!blog) {
            return <div>Loading...</div>;
        }
  return (
    <section className="bg-cover py-10 bg-center bg-no-repeat"
    style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('/images/blog-bg.jpg')" }}
>

        <div className="pt-28 h-full  px-20">
        <div className="max-w-4xl mx-auto p-6  bg-black/90 border border-bronze shadow-md ">
            <img src={`${blog.featured_image}`} alt="Featured" className="w-full h-auto py-5 object-cover " />
            <div className="p-4 font-sairaCondensed">
                <h1 className="text-3xl font-bold text-white mb-2">{blog.title}</h1>
                <div className="text-white/75 px-3 py-3 flex text-xs gap-7">
                <div className="flex gap-2">
                                            <div><FontAwesomeIcon icon={faUser} style={{ color: "#b08d57", fontSize: "1rem" }}/></div>
                                            <div>{blog.author.f_name} {blog.author.l_name}</div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div><FontAwesomeIcon icon={faCalendarDays} style={{ color: "#b08d57", fontSize: "1rem" }} /></div>
                                            <div>Date</div>
                                        </div>
                                        
                                    </div>
                <div className="text-lg py-5 text-customGrey mb-6">
                    {blog.content}
                </div>
                </div>
        </div>
            </div>
    </section>
  )
}

export default SinglePost