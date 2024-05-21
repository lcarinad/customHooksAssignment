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

function useAxios(url) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(url);
    setData((data) => [...data, { ...response.data, id: uuid() }]);
  };

  return [data, fetchData];
}

export { useFlip, useAxios };
