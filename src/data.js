import { v4 as uuid } from "uuid";

export const defaultUser = {
  id: uuid(),
  username: "username",
  name: "name",
  profile_image:
    "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-19/s150x150/30920544_298371590698348_4269672236434063360_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_ohc=hmQCN4Zfn2gAX8y8nst&tp=1&oh=27ec4ba469458416e06c9e46f603dc7e&oe=6058E85A"
  // profile_image:
  // "https://instagram.com/static/images/anonymousUser.jpg/23e7b3b2a737.jpg"
};

export function getDefaultUser() {
  return {
    id: uuid(),
    username: "username",
    name: "name",
    profile_image:
      "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-19/s150x150/30920544_298371590698348_4269672236434063360_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_ohc=hmQCN4Zfn2gAX8y8nst&tp=1&oh=27ec4ba469458416e06c9e46f603dc7e&oe=6058E85A"
  };
}

export const defaultPost = {
  id: uuid(),
  likes: 10,
  caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
  user: defaultUser,
  media:
    "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/140226921_1519382708257900_3800637222908382216_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=3jx70ysvYxsAX9SgzGg&tp=1&oh=10fa7a0b8a3d667fbf7d64bc15495f9f&oe=60539390",
  comments: [],
  created_at: "2020-02-28T03:08:14.522421+00:00"
};

export function getDefaultPost() {
  return {
    id: uuid(),
    likes: 10,
    caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
    user: defaultUser,
    media:
      "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-15/e35/140226921_1519382708257900_3800637222908382216_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=3jx70ysvYxsAX9SgzGg&tp=1&oh=10fa7a0b8a3d667fbf7d64bc15495f9f&oe=60539390",
    comments: [],
    created_at: "2020-02-28T03:08:14.522421+00:00"
  };
}

export const defaultNotifications = [
  {
    id: uuid(),
    type: "follow",
    user: defaultUser,
    created_at: "2020-02-29T03:08:14.522421+00:00"
  },
  {
    id: uuid(),
    type: "like",
    user: defaultUser,
    post: defaultPost,
    created_at: "2020-02-29T03:08:14.522421+00:00"
  }
];

export const defaultCurrentUser = {
  id: uuid(),
  username: "pao",
  name: "Paola Garay",
  profile_image:
    "https://scontent-bog1-1.cdninstagram.com/v/t51.2885-19/s150x150/30920544_298371590698348_4269672236434063360_n.jpg?_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_ohc=hmQCN4Zfn2gAX8y8nst&tp=1&oh=27ec4ba469458416e06c9e46f603dc7e&oe=6058E85A",
  website: "https://react12.io",
  email: "garay.angela@gmail.com",
  bio: "This is my bio",
  phone_number: "555-555-5555",
  posts: Array.from({ length: 10 }, () => getDefaultPost()),
  followers: [defaultUser],
  following: [defaultUser]
};
