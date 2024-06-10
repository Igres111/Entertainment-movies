type TTrending = {
  small: string;
  large: string;
};

type TRegular = {
  small: string;
  medium: string;
  large: string;
};

type TThumbnail = {
  trending?: TTrending;
  regular: TRegular;
};

type TDataItem = {
  title: string;
  thumbnail: TThumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};
