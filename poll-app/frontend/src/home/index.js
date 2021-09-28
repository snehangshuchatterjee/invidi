import React from "react";
import { connect } from 'react-redux';

import Polls from "../polls";

const mapStateToProps = (state) => {
    return ({
        userOpinion: state.pollsReducer.userOpinion
    });
}

const Home = (props) => {
    const { userOpinion } = props;

    return (
        <div>
            <Polls />
        </div>
    );
}

export default connect(mapStateToProps)(Home);
