import React from 'react'
import BlogContainer from '../../components/common/BlogContainer'


const BlogSection = ({blogPosts}) => {
 return (
<section className="px-40 bg-gradient-to-b from-customDarkGrey via-customDarkGrey to-black">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-white max-w-screen-xl py-10 h-auto mx-auto ">
        {blogPosts.map((post, index) => (
            <BlogContainer key={index} data={post} />
        ))}
    </div>


</section>
)
}

export default BlogSection