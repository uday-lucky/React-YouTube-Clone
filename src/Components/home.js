import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import VideosFeed from "./videosfeed";
import "./home.css";
import { fetchFromAPI } from "../Utils/servicecall";
const Home = () => {
  console.log("Home")
  const [selectedCategory, setSelectedCategory] = useState("new");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
   
    getVideosList();
  }, [selectedCategory]);

  const getVideosList = async () => {
    await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
      (data) => setVideos(data.items)
    );
  };
  console.log("API",videos);
  return (
    <div className="home">
      <Sidebar setSelectedCategory = {setSelectedCategory}/>
      <VideosFeed video={videos} />
    </div>
  );
};

export default Home;
