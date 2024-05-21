import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "uuid";

/* Custom hook to handle flipping a card */
function useFlip() {
  const [isUp, setIsUp] = useState(true);
  const flipCard = () => {
    setIsUp((isValue) => !isValue);
  };

  return [isUp, flipCard];
}

function useAxios(initialUrl = null) {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(initialUrl);
  const [trigger, setTrigger] = useState(0);

  const fetchData = async () => {
    if (url) {
      const response = await axios.get(url);
      setData((data) => [...data, { ...response.data, id: uuid() }]);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url, trigger]);

  const setFetchUrl = (newUrl) => {
    setUrl(newUrl);
    setTrigger((t) => t + 1); // This ensures the effect runs
  };

  return [data, setFetchUrl];
}

export { useFlip, useAxios };
