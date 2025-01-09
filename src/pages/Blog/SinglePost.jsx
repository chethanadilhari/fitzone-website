import React from 'react'
import BlogNavigation from './BlogNavigation'


const SinglePost = () => {
  return (
    <div>
            <div className="bg-gradient-to-b from-customDarkGrey via-customDarkGrey to-black">
                <BlogNavigation/>
</div>

        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <img src="featured-image-url" alt="Featured" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4">
                <h1 className="text-3xl font-bold text-black mb-2">Post Title</h1>
                <div className="flex items-center mb-4">
                    <p className="text-sm text-dark-brown mr-4">By Author Name</p>
                    <p className="text-sm text-dark-brown">Date</p>
                </div>
                <div className="text-lg text-black mb-6">
                    <p>Post content goes here...</p>
                </div>
                <p className="text-sm text-bronze mt-8">Post description goes here...</p>
            </div>
        </div>
    </div>
  )
}

export default SinglePost