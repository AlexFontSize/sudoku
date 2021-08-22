import { NavLink } from "react-router-dom"
const Win = () => {
    return (
        <div className="win">
            <p className="final">Вы выиграли</p>
            <NavLink className="final" to="/menu">Играть еще раз</NavLink>
        </div>
    )
};
export default Win;