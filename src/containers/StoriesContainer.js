import React, { useEffect, useState } from "react";
import { getStoryIds, getStory } from "../services/hnApi";
import { Story } from "../components/Story";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(stories => setStoryIds(stories));
  }, []); // [] what's in the [] is been watching by useEffect,

  return (
    <>
      <h1>Hacker News Stories</h1>
      {storyIds.map(storyId => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </>
  );
};
