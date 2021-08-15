import { useState } from "react";

export const Easy = (props) => {
    const isWin = () => {
        for(let arr of props.matrix){
        
        };
    };
    const setValue = e => props.setValue(e.target.dataset.value, indexArr);
    const [indexArr, newIndexArr] = useState([0,0]);
    const setActiveInput = (a, b) => newIndexArr([a,b])
    const tbody = props.matrix.map((tr, trIndex) => {
        return (
            <tr key={`_${trIndex}`}>{tr.map((td, index) => {
                return (
                    <td onClick={() => setActiveInput(trIndex, index)} key={`_${trIndex}_${index}`}>
                        <input id={`_${trIndex}_${index}`} type="radio" name="easyMatrix" className="check" value={td} />
                        <label className="cell" htmlFor={`_${trIndex}_${index}`}>{td || ""}</label>
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