import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../Utils/servicecall";
import Sidebar from "./sidebar";
import VideosFeed from "./videosfeed";
const SearchData = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <div>
      <div style={{marginLeft:270}}>Resultsfor :  {searchTerm} </div>
      <Sidebar/>
      <VideosFeed video={videos} />
    </div>
  );
};

export default SearchData;
