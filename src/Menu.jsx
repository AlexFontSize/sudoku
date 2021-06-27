import { NavLink } from "react-router-dom"

export const Menu = () => {
    return (
        <div className="menu">
            <h1>Судоку</h1>
            <ul className="menu__body">
                <li><NavLink to="/easy">Лёгкий</NavLink></li>
                <li><NavLink to="/normal">Средний</NavLink></li>
                <li><NavLink to="/hard">Сложный</NavLink></li>
            </ul>
        </div>
    );
};