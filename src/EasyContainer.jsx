import { connect } from "react-redux";
import { Easy } from "./Easy";
import { setValue } from "./Redux/easyReducer"

const mapStateToProps = state => {
    return {
        matrix: state.easy.matrix.start,
        values: state.easy.values,
        errors: state.easy.errors,
    };
};
export default connect(mapStateToProps, {setValue})(Easy);