declare global {
  // COMPONENT PROPS
  interface StoryProps {
    cover: string;
    emoji: string;
    name: string;
    path: string;
    size: string;
  }

  interface PostProps {
    id: number;
    likes?: number;
    src: string;
  }

  interface FavButtonProps {
    photoId: number;
    photoKey: string;
    likes: number;
  }

  // CONTEXT
  interface ContextProps {
    isAuth: boolean;
    activateAuth: () => void;
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

  interface TRegister {
    email: string;
    password: string;
  }
}

export {};
