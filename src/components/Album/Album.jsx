import { Link, useNavigate } from "react-router-dom";


const Album = ({ album }) => {
  const { title, id } = album;
  const albumStyle = {
    border: '2px solid orange',
    padding: '20px',
    margin: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
  }
  const navigate = useNavigate();
  const handleClickDetail = () => {
    navigate(`/album/${id}`)
  }
  
  return (
    <div style={albumStyle}>
      <h3 style={{flexGrow: '1'}}> {title} </h3>
      <Link to= {`/album/${id}`}>
        <button>Detail</button>
      </Link>
      <button onClick={handleClickDetail}>Click me To See Details</button>
    </div>
  );
};

export default Album;