import React from "react";
import PollCard from "../components/PollCard/PollCard";
import { useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [showPoll, setShowPoll] = useState(0);
  const answeredPolls = useSelector((state) =>
    Object.values(state.questions)
      .filter((poll) => {
        return (
          poll.optionOne.votes.includes(state.authUser.id) ||
          poll.optionTwo.votes.includes(state.authUser.id)
        );
      })
      .sort((a, b) => b.timestamp - a.timestamp)
  );
  const unansweredPolls = useSelector((state) =>
    Object.values(state.questions)
      .filter((poll) => {
        return (
          !poll.optionOne.votes.includes(state.authUser.id) &&
          !poll.optionTwo.votes.includes(state.authUser.id)
        );
      })
      .sort((a, b) => b.timestamp - a.timestamp)
  );
  const users = useSelector((state) => state.users);

  return (
    <div>
      <h1 className=" text-4xl text-center">Dashboard</h1>
      <div className="tabs grid place-content-center w-full p-10">
        <div>
          <button
            onClick={() => setShowPoll(0)}
            className={`tab tab-bordered ${showPoll === 0 && "tab-active"}`}
          >
            Unanswered Poll
          </button>
          <button
            onClick={() => setShowPoll(1)}
            className={`tab tab-bordered ${showPoll === 1 && "tab-active"}`}
          >
            Answered Poll
          </button>
        </div>
      </div>
      {showPoll === 0 ? (
        <div>
          <h2 className=" text-blue-400 text-2xl underline my-8 text-center">
            Unanswered Polls
          </h2>
          <div className=" flex gap-6 flex-wrap justify-around">
            {unansweredPolls.map((poll) => {
              return (
                <PollCard
                  key={poll.id}
                  poll={poll}
                  author={users[poll.author]}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <h2 className=" text-blue-400 text-2xl underline my-8 text-center">
            Answered Polls
          </h2>
          <div className=" flex gap-6 flex-wrap justify-around">
            {answeredPolls.map((poll) => {
              return (
                <PollCard
                  key={poll.id}
                  poll={poll}
                  author={users[poll.author]}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
