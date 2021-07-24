declare global {
  // COMPONENT PROPS
  interface StoryProps {
    cover: string;
    emoji: string;
    name: string;
    path: string;
  }

  interface PostProps {
    id: number;
    likes?: number;
    src: string;
  }

  // USE CASES
  interface TCategory extends StoryProps {
    id: number;
  }

  interface TUser {
    nickname: string;
    name: string;
    avatarUrl: string;
  }
}

export {};
