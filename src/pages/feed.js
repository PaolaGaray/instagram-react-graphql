import React, { useState } from "react";
import { Hidden } from "@material-ui/core";

import { useFeedPageStyles } from "../styles";
import Layout from "../components/shared/Layout";
import UserCard from "../components/shared/UserCard";
import FeedPost from "../components/feed/FeedPost";
import FeedSideSuggestions from "../components/feed/FeedSideSuggestions";
import { getDefaultPost } from "../data";
import LoadingScreen from "../components/shared/LoadingScreen";
import { LoadingLargeIcon } from "../icons";
import FollowSuggestions from '../components/shared/FollowSuggestions';

function FeedPage() {
  const classes = useFeedPageStyles();
  const [isEndOfFeed] = useState(false);

  let loading = false;
  if (loading) return <LoadingScreen />;

  return (
    <Layout>
      <div className={classes.container}>
        <div>
          {/* Feed Follow Sugestions */}
          <FollowSuggestions />
          {/* Feed Posts */}
          {Array.from({ length: 5 }, () => getDefaultPost()).map(post => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
        {/* Sidebar */}
        <Hidden smDown>
          <div className={classes.sidebarContainer}>
            <div className={classes.sidebarWrapper}>
              <UserCard avatarSize={50} />
              <FeedSideSuggestions />
            </div>
          </div>
        </Hidden>

        {!isEndOfFeed && <LoadingLargeIcon />}
      </div>
    </Layout>
  );
}

export default FeedPage;
