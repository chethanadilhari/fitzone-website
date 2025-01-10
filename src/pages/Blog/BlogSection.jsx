import React from 'react'
import BlogContainer from '../../components/common/BlogContainer'
import { Link } from 'react-router-dom'



const BlogSection = ({blogPosts}) => {
 return (
<section className="px-4 md:px-20 lg:px-40 pb-20 lg:pb-40 bg-gradient-to-b from-customDarkGrey via-customDarkGrey to-black">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-white max-w-screen-xl py-10 h-auto mx-auto">
        {blogPosts.map((post, index) => (
            <Link key={index} to={`/blog/${post.id}`}><BlogContainer key={index} data={post} /> </Link>
        ))}
    </div>

    <div className="flex justify-center py-10">
                        <nav className="inline-flex space-x-2">
                            <button className="bg-bronze text-white py-2 px-4 rounded" disabled>
                                1
                            </button>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                2
                            </button>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                3
                            </button>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                4
                            </button>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                5
                            </button>
                            <span className="text-white py-2 px-4">...</span>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                10
                            </button>
                        </nav>
                    </div>
</section>


)
}

export default BlogSection