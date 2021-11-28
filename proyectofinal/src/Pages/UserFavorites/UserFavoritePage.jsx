import { useNavigate } from 'react-router-dom';

export default function UserFavorite() {
    const navigate = useNavigate()


    const EnterHandler = () => {
        navigate("/user")
    }

    return(
        <div>
            <button onClick={EnterHandler}>salir</button>
        </div>
    )
}