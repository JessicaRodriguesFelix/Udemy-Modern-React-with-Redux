import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization:
          "lient-ID KzzAEZ2JXJHhKYWOnVglmpxIiFVclAS5g7bbh-WjMXc",
      },
      params: {
        query: "cars",
      },
    });
    console.log(response)
    return response;
}

export default searchImages;