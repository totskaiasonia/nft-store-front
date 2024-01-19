import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>Home
        <button onClick={() => navigate('/store')}>to store</button>
    </div>
  )
}

export default Home