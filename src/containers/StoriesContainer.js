import React, { useEffect, useState, memo } from "react";
import { getStoryIds, getStory } from "../services/hnApi";
import { Story } from "../components/Story";
import {
  GlobalStyle,
  StoryContainerWrapper
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const StoriesContainer = () => {
  const { count } = useInfiniteScroll();

  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then(stories => setStoryIds(stories));
  }, []); // [] what's in the [] is been watching by useEffect,

  return (
    <>
      <GlobalStyle />
      <StoryContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoryContainerWrapper>
    </>
  );
};
