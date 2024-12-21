import React from 'react'
import BlogContainer from '../../components/common/BlogContainer'



const BlogPost = [{
    image: "/images/blog-img-1.jpg",
    title: "Essential Tips for Maintain a Healthy Lifestyle",
    date: "Aug,15,2019",
    category: "Life Style",
},

{
    image: "/images/blog-img-2.jpg",
    title: "Essential Tips for Maintain a Healthy Lifestyle",
    date: "Aug,15,2019",
    category: "Life Style",
},

{
    image: "/images/blog-img-3.jpg",
    title: "Essential Tips for Maintain a Healthy Lifestyle",
    date: "Aug,15,2019",
    category: "Life Style",
},

{
    image: "/images/blog-img-4.jpg",
    title: "Essential Tips for Maintain a Healthy Lifestyle",
    date: "Aug,15,2019",
    category: "Life Style",
},

{
    image: "/images/blog-img-5.jpg",
    title: "Essential Tips for Maintain a Healthy Lifestyle",
    date: "Aug,15,2019",
    category: "Life Style",
},

{
    image: "/images/blog-img-6.jpg",
    title: "Essential Tips for Maintain a Healthy Lifestyle",
    date: "Aug,15,2019",
    category: "Life Style",
},

{
    image: "/images/blog-img-7.jpg",
    title: "Essential Tips for Maintain a Healthy Lifestyle",
    date: "Aug,15,2019",
    category: "Life Style",
},

{
    image: "/images/blog-img-8.jpg",
    title: "Essential Tips for Maintain a Healthy Lifestyle",
    date: "Aug,15,2019",
    category: "Life Style",
},

{
    image: "/images/blog-img-9.jpg",
    title: "Essential Tips for Maintain a Healthy Lifestyle",
    date: "Aug,15,2019",
    category: "Life Style",
},



]

const BlogSection = () => {
 return (
<section className="px-40 bg-gradient-to-b from-customDarkGrey via-customDarkGrey to-black">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-white max-w-screen-xl py-10 h-auto mx-auto ">
        {BlogPost.map((post, index) => (
            <BlogContainer key={index} data={post} />
        ))}
    </div>


</section>
)
}

export default BlogSection