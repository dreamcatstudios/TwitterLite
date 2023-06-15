import React, { useContext } from "react";
import { TweetContext } from "../context/TweetContext";

function PostTweet() {
  const {
    tweets,
    onSubmit,
    deleteTweet,
    handleChange,
    text,
    editTweet,
    edit,
    editedText,
    onEditedHandleChange,
    onEditSubmission,
    setEdit,
    time,
    setTime,
  } = useContext(TweetContext);

  return (
    <div className="mt-5 items-center justify-center w-full">
      <form onSubmit={onSubmit}>
        <div className="flex justify-between m-5">
          <input
            className="px-3 py-2 border-b-2 w-[80%]"
            type="text"
            id="postTweet"
            placeholder="What is happening?!"
            value={text}
            onChange={handleChange}
          />
          <button className="px-5 py-2 bg-[#1DA1F2] rounded-lg text-white">
            Tweet
          </button>
        </div>
      </form>

      <div>
        {tweets.map((tweet, index) => {
          return (
            <div
              className="flex flex-row gap-2 justify-between border-2 rounded-lg m-5"
              key={index}
            >
              {edit && index === edit.index ? (
                <div class="w-full flex flex-row items-center justify-between m-5 ">
                  <input
                    class="border-b-2 w-[80%]"
                    type="text"
                    onChange={onEditedHandleChange}
                    value={editedText}
                    placeholder="Edit your comment..."
                  />
                  <button
                    class="px-5 py-3 border-2 border-[#1DA1F2] rounded-lg"
                    onClick={onEditSubmission}
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div className=" w-full flex flex-row items-center justify-between">
                  <p className="p-5">{tweet}</p>
                  <span>Twitted @ {time[index]}</span>
                  <div className="flex gap-5 p-5">
                    <button
                      class="px-5 py-3 border-2 border-[#1DA1F2] rounded-lg"
                      onClick={() => deleteTweet(index)}
                    >
                      Delete
                    </button>
                    <button
                      class="px-5 py-3 border-2 border-[#1DA1F2] rounded-lg"
                      onClick={() => editTweet(index)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostTweet;
