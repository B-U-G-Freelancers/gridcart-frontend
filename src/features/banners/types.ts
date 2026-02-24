export interface Banner {
  id: string;
  image: string;
  title?: string;
  link?: string;
}

export interface BannersState {
  items: Banner[];
  isLoading: boolean;
  error: string | null;
}
