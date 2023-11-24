import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const AlbumDetail = () => {
  const detail = useLoaderData();
  const { title, id } = detail;
  const navigate = useNavigate();
  const {albumId} = useParams();
  console.log(albumId);

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <h2>Album Detail</h2>
      <h3>Title: {title} </h3>
      <p>Id: {id} </p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default AlbumDetail;