import axios from 'axios';

const searchImages = async (searchTerm) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 9ASf93bmcjUTvVEReiZ6i9MNKVxjShkj2WrNfOYWDcQ',
        }, 
        params: {
            query: searchTerm,
        },
    });
        return response.data.results
};

export default searchImages;