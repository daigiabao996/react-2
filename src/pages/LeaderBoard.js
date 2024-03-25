import React from "react";
import { useSelector } from "react-redux";

const LeaderBoard = () => {
  const users = useSelector((state) => state.users);
  const sortedUsers = Object.keys(users).sort((a, b) => {
    const userA = users[a];
    const userB = users[b];
    const userAScore =
      Object.keys(userA.answers).length + Object.keys(userA.questions).length;
    const userBScore =
      Object.keys(userB.answers).length + Object.keys(userB.questions).length;
    return userBScore - userAScore;
  });
  return (
    <div>
      <h1 className=" text-4xl text-center">LeaderBoard</h1>
      <div className="overflow-x-auto">
        <table className="table w-full mt-12">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Answer</th>
              <th>Poll</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map((user, index) => {
              const { name, avatarURL, answers, questions, id } = users[user];
              return (
                <tr key={id}>
                  <th>{index + 1}</th>
                  <td className=" flex items-center gap-8">
                    <span>
                      {avatarURL ? (
                        <img
                          src={avatarURL}
                          alt={name}
                          className="w-10 h-10 rounded-full"
                        />
                      ) : (
                        <img
                          src={`https://avatar.iran.liara.run/username?username=${name}`}
                          alt={name}
                          className="w-10 h-10 rounded-full"
                        />
                      )}
                    </span>
                    <span className=" font-medium">{`${name} (${id})`}</span>
                  </td>
                  <td>{Object.keys(answers).length}</td>
                  <td>{Object.keys(questions).length}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
