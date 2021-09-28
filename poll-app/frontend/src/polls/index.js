import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PollItem from "./pollItem";

import {
  fetchPollCategories,
  fetchPollsForGivenCategory,
  saveUserOpinion,
  saveCurrentUserName,
  saveUserOpinionToDatabase,
  saveCurrentSport,
} from "./polls.actions";

const mapStateToProps = (state) => {
  return {
    categories: state.pollsReducer.categories,
    error: state.pollsReducer.error,
    loading: state.pollsReducer.loading,
    polls: state.pollsReducer.polls,
    userName: state.pollsReducer.userName,
    userOpinion: state.pollsReducer.userOpinion,
    currentSport: state.pollsReducer.currentSport,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPollCategories: () => dispatch(fetchPollCategories()),
    fetchPollsForGivenCategory: (category) =>
      dispatch(fetchPollsForGivenCategory(category)),
    saveUserOpinion: (userOpinion) => dispatch(saveUserOpinion(userOpinion)),
    saveUserOpinionToDatabase: (userVote) =>
      dispatch(saveUserOpinionToDatabase(userVote)),
    saveCurrentUserName: (userName) => dispatch(saveCurrentUserName(userName)),
    saveCurrentSport: (sport) => dispatch(saveCurrentSport(sport)),
  };
};

const Polls = (props) => {
  const {
    categories,
    polls,
    fetchPollCategories,
    fetchPollsForGivenCategory,
    userName,
    userOpinion,
    currentSport,
    saveCurrentSport,
    saveUserOpinion,
    saveCurrentUserName,
    saveUserOpinionToDatabase
  } = props;
  let [pollCount, setPollCount] = useState(0);
  let [counter, setCounter] = useState(0);
  let [showThanks, setShowThanks] = useState(false);
  let [name, setUserName] = useState("");

  useEffect(() => {
    fetchPollCategories();
  }, []);

  useEffect(() => {
    if (categories) {
      const sportCategory = getRandomCategory(categories);
      saveCurrentSport(sportCategory);
      fetchPollsForGivenCategory(sportCategory);
    }
  }, [categories]);

  useEffect(() => {
    setPollCount(polls.length);
  }, [polls]);

  useEffect(() => {
    if (counter && counter === pollCount) {
      setShowThanks(true);
    }
  }, [counter]);

  useEffect(() => {
    if (counter && counter === pollCount) {
      const userObj = {
        name,
        date: new Date(),
        sport: currentSport,
        votingDetails: userOpinion,
      };
      saveUserOpinionToDatabase(userObj);
    }
  }, [userOpinion]);

  const handleButtonClick = (winner) => {
    const userOpinionObject = {
      pollID: polls[counter].id,
      winner,
    };

    saveUserOpinion(userOpinionObject);

    if (counter < pollCount) {
      setCounter(++counter);
    }
  };

  const getRandomCategory = (categoryArray) => {
    const categoryArrayLength = categoryArray.length;
    const randomArrayIndex = Math.floor(Math.random() * categoryArrayLength);

    return categoryArray[randomArrayIndex];
  };

  const getPollQuestion = () => {
    const pollQuestion = `Who do you think will win a ${polls[counter].sport} match between these 2 teams?`;

    return pollQuestion;
  };

  const saveUserNameToStore = () => {
    saveCurrentUserName(name);
  };

  return (
    <div className="polls">
      {!userName && (
        <div className="user-name">
          <span className="inner-class">Hi There....!! I am </span>
          <span className="inner-class">
            <input
              type="text"
              className="textBox"
              onChange={(data) => {
                setUserName(data.currentTarget.value);
              }}
            ></input>
          </span>
          <span className="inner-class">
            <input
              type="submit"
              value="Take me to the Poll"
              className="button"
              onClick={saveUserNameToStore}
            ></input>
          </span>
        </div>
      )}
      {userName && counter < pollCount && (
        <PollItem
          leftButtonLabel={polls[counter].awayName || "Away Team"}
          pollQuestion={getPollQuestion()}
          rightButtonLabel={polls[counter].homeName || "Home Team"}
          onClickHandler={handleButtonClick}
        />
      )}
      {showThanks && (
        <div className="completion-message">Thank you for voting.</div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Polls);
