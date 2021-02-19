import React from "react";
import { useExploreGridStyles } from "../../styles";
import { LoadingLargeIcon } from "../../icons";
import { getDefaultPost } from "../../data";
import GridPost from "../shared/GridPost";

function ExploreGrid() {
  const classes = useExploreGridStyles();

  let loading = false;

  return (
    <>
      {loading ? (
        <LoadingLargeIcon />
      ) : (
        <article className={classes.article}>
          <div className={classes.postContainer}>
            {Array.from({ length: 20 }, () => getDefaultPost()).map(post => (
              <GridPost key={post.id} post={post} />
            ))}
          </div>
        </article>
      )}
    </>
  );
}

export default ExploreGrid;
