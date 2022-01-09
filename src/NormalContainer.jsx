import { connect } from "react-redux";
import Normal from "./Normal";
import { setValue } from "./Redux/normalReducer";
import { startGame } from "./Redux/normalReducer";

const mapStateToProps = state => {
    return {
        matrix: state.normal.matrix.start,
        values: state.normal.values,
        errors: state.normal.errors,
    };
};
export default connect(mapStateToProps, {setValue, startGame})(Normal);