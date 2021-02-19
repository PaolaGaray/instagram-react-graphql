import React from "react";
import { useProfilePictureStyles } from "../../styles";
import { Person } from "@material-ui/icons";

function ProfilePicture({
  size,
  image = "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-19/s150x150/30920544_298371590698348_4269672236434063360_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_ohc=hmQCN4Zfn2gAX8y8nst&tp=1&oh=27ec4ba469458416e06c9e46f603dc7e&oe=6058E85A",
  isOwner
}) {
  const classes = useProfilePictureStyles({ size, isOwner });

  return (
    <section className={classes.section}>
      {image ? (
        <div className={classes.wrapper}>
          <img src={image} alt="user profile" className={classes.image} />
        </div>
      ) : (
        <div className={classes.wrapper}>
          <Person className={classes.person} />
        </div>
      )}
    </section>
  );
}

export default ProfilePicture;
