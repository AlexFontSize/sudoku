import { useEffect } from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";

const Easy = (props) => {
    const isWin = () => {
        for (let arr of props.matrix) {
            if (arr.some(i => i === 0)) return;
        };
        props.startGame();
        props.history.push("/win");
    };
    const isOver = () => {
        if (props.errors === 3) {
            props.startGame();
            props.history.push("/gameOver");
        };
    };
    useEffect(() => {
        isWin();
        isOver();
        window.onpopstate = props.startGame;
    }, [props.matrix, props.errors]);
    const setValue = e => props.setValue(e.target.dataset.value, indexArr);
    const [indexArr, newIndexArr] = useState([0, 0]);
    const setActiveInput = (a, b) => newIndexArr([a, b])
    const tbody = props.matrix.map((tr, trIndex) => {
        return (
            <tr key={`_${trIndex}`}>{tr.map((td, index) => {
                return (
                    <td className={(trIndex === indexArr[0] && index === indexArr[1]) ? "td activeCeil" : "td"} onClick={() => setActiveInput(trIndex, index)} key={`_${trIndex}_${index}`}>
                        {td || ""}
                    </td>
                );
            })}</tr>
        );
    });
    const values = props.values.map((value) => {
        return (
            <span onClick={setValue} data-value={value} key={value}>{value}</span>
        );
    });
    return (
        <div className="easy">
            <table className="table">
                <tbody>{tbody}</tbody>
            </table>
            <div className="values">{values}</div>
            <div className="errors">Ошибки: {props.errors}/3</div>
        </div>
    );
};
export default withRouter(Easy);