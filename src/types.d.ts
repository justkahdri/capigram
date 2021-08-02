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
    liked: true;
  }

  interface FavButtonProps {
    photoId: number;
    likes: number;
    liked: true;
  }

  // CONTEXT
  interface ContextProps {
    isAuth: boolean;
    activateAuth: (token: string) => void;
    removeAuth: () => void;
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
