import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="layout">
      <p>Home</p>
      <button onClick={() => navigate('/store')}>to store</button>
    </div>
  )
}

export default Home