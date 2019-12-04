import React from "react";
import { act } from "react-dom/test-utils";
import { App } from "../App";
import { storyIds, singularStory } from "../fixtures";
import { getStory, getStoryIds } from "../services/hnApi";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { STORY_INCREMENT } from "../constants";
