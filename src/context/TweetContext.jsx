import React, { createContext, useState } from "react";

const TweetContext = createContext();

const TweetContextProvider = (props) => {
  const [text, setText] = useState("");
  const [tweets, setTweets] = useState([]);
  const [edit, setEdit] = useState({ status: false, index: null });
  const [editedText, setEditedText] = useState("");
  const [time, setTime] = useState([]);

  const addTweet = () => {
    setTweets([...tweets, text]);
    tweetTime();
  };

  const tweetTime = () => {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    setTime([...time, formattedTime]);
  };

  const deleteTweet = (index) => {
    setTweets(tweets.filter((_, i) => i !== index));
  };

  const editTweet = (index) => {
    setEdit({ status: true, index });
    setEditedText(tweets[index]);
  };

  const onEditSubmission = () => {
    const updatedTweets = [...tweets];
    updatedTweets[edit.index] = editedText;
    setTweets(updatedTweets);
    setEdit({ status: false, index: null });
    setEditedText("");
  };

  const onEditedHandleChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTweet(e.target.value);
    setText("");
  };

  return (
    <TweetContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </TweetContext.Provider>
  );
};

export { TweetContext, TweetContextProvider };
