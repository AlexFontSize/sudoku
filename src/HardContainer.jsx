import { connect } from "react-redux";
import Hard from "./Hard";
import { setValue } from "./Redux/hardReducer";
import { startGame } from "./Redux/hardReducer";

const mapStateToProps = state => {
    return {
        matrix: state.hard.matrix.start,
        values: state.hard.values,
        errors: state.hard.errors,
    };
};
export default connect(mapStateToProps, {setValue, startGame})(Hard);