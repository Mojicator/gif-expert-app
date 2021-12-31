export const getGifs = async (category) => {
  const API_KEY = "CiI2MumCFxh5K7c6HPoKs3UA6U2PiDGP";
  const LIMIT = 10;
  const QUERY = encodeURI(category);
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${QUERY}&limit=${LIMIT}&rating=g&lang=en`;
  const resp = await fetch(URL);
  const { data } = await resp.json();

  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized.url,
    };
  });
  return gifs;
};
