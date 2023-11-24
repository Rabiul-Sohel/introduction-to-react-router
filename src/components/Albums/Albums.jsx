import { useLoaderData } from "react-router-dom";
import Album from "../Album/Album";


const Albums = () => {
  const albums = useLoaderData()
  
  return (
    <div>
      <h2>Total Album: {albums.length} </h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
        {
          albums.map((album, idx) => <Album key={idx} album = {album}></Album>)
        }
      </div>
    </div>
  );
};

export default Albums;