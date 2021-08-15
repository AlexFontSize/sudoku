const SET_VALUE = "Set value";
const dataOptions = {
    choiseOptions(){
        return Math.floor(Math.random()*this.options.length);
    },
    options: [
        [
            [
                [2, 6, 4, 1, 3, 5],
                [5, 1, 3, 6, 2, 4],
                [3, 2, 6, 5, 4, 1],
                [1, 4, 5, 2, 6, 3],
                [4, 5, 2, 3, 1, 6],
                [6, 3, 1, 4, 5, 2]
            ],
            [
                [2, 6, 4, 1, 3, 5],
                [5, 1, 3, 6, 2, 4],
                [3, 2, 0, 5, 4, 1],
                [1, 4, 5, 2, 6, 3],
                [4, 5, 2, 3, 1, 6],
                [6, 3, 1, 4, 5, 2]
            ]
        ],
        /* [
            [
                [2, 6, 4, 1, 3, 5],
                [5, 1, 3, 6, 2, 4],
                [3, 2, 6, 5, 4, 1],
                [1, 4, 5, 2, 6, 3],
                [4, 5, 2, 3, 1, 6],
                [6, 3, 1, 4, 5, 2]
            ],
            [
                [2, 0, 0, 0, 0, 5],
                [0, 0, 3, 6, 0, 0],
                [3, 2, 0, 0, 4, 1],
                [1, 4, 0, 0, 6, 3],
                [0, 0, 2, 3, 0, 0],
                [6, 0, 0, 0, 0, 2]
            ]
        ],
        [
            [
                [2, 6, 4, 1, 3, 5],
                [5, 1, 3, 6, 2, 4],
                [3, 2, 6, 5, 4, 1],
                [1, 4, 5, 2, 6, 3],
                [4, 5, 2, 3, 1, 6],
                [6, 3, 1, 4, 5, 2]
            ],
            [
                [2, 0, 0, 0, 0, 5],
                [0, 0, 3, 6, 0, 0],
                [3, 2, 0, 0, 4, 1],
                [1, 4, 0, 0, 6, 3],
                [0, 0, 2, 3, 0, 0],
                [6, 0, 0, 0, 0, 2]
            ]
        ],
        [
            [
                [2, 6, 4, 1, 3, 5],
                [5, 1, 3, 6, 2, 4],
                [3, 2, 6, 5, 4, 1],
                [1, 4, 5, 2, 6, 3],
                [4, 5, 2, 3, 1, 6],
                [6, 3, 1, 4, 5, 2]
            ],
            [
                [2, 0, 0, 0, 0, 5],
                [0, 0, 3, 6, 0, 0],
                [3, 2, 0, 0, 4, 1],
                [1, 4, 0, 0, 6, 3],
                [0, 0, 2, 3, 0, 0],
                [6, 0, 0, 0, 0, 2]
            ]
        ] */
    ],
};
const initialState = {
    matrix: {},
    values: [1, 2, 3, 4, 5, 6],
    errors: 0
};
const randomOrtionsChoise = (state, data) => {
    let randomOrtions = data.choiseOptions();
    let start = JSON.stringify(data.options[randomOrtions][1]);
    start = JSON.parse(start);
    let end = JSON.stringify(data.options[randomOrtions][0]);
    end = JSON.parse(end);
    return {
        ...state,
        matrix: {...state.matrix, start, end},
        errors: 0
    };
};
const easyReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_VALUE:
        let newState = {
            ...state,
            matrix: {...state.matrix, start: [...state.matrix.start]}
        };
        if(state.matrix.end[action.indexArr[0]][action.indexArr[1]] === +action.value){
            newState.matrix.start[action.indexArr[0]][action.indexArr[1]] = +action.value;
        }else{
            newState.errors++;
        };
        return newState;
    };
    return randomOrtionsChoise(state, dataOptions);
};
export const setValue = (value, indexArr) => ({type: SET_VALUE, value, indexArr});
export default easyReducer;