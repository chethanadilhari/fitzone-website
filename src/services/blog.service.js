import axios from 'axios';

const API_URL = '/api/blog';

class BlogService {
    async getBlogs(query = '') {
        const response = await axios.get(API_URL, { params: { search: query } });
        return response.data;
    }

    async getBlogById(blogId) {
        const response = await axios.get(API_URL + '/'+ blogId);
        return response.data;
    }
}

export default new BlogService();