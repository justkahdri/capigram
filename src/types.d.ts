declare global {
  interface TUser {
    nickname: string;
    name: string;
    avatarUrl: string;
  }
  interface StoryProps {
    user: TUser;
    route: string;
  }
}

export {};
