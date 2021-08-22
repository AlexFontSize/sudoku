import { NavLink } from "react-router-dom"
export const GameOver = () => {
    return (
        <div className="gameOver">
            <p className="final">Вы проиграли</p>
            <NavLink className="final" to="/menu">Играть еще раз</NavLink>
        </div>
    )
};
export default GameOver;