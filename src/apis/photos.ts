import { unsplashApi } from "./api";

export const photoApis = {
  getPhotos: (params: { page: number; perPage?: number }) =>
    unsplashApi.photos.list({ perPage: 15, ...params }),
  getPhoto: (params: { photoId: string }) => unsplashApi.photos.get(params),
};
