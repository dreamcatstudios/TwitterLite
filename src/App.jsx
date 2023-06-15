import "./App.css";
import PostTweet from "./components/PostTweet";
import { TweetContextProvider } from "./context/TweetContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <TweetContextProvider>
        <Header />
        <div className="flex-grow">
          <PostTweet />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </TweetContextProvider>
    </div>
  );
}

export default App;
