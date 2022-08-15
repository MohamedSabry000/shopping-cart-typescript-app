import youtube from './FakeStore';
import { IProduct } from '../@types/fakestore';

export const getList = async (query: string) : Promise<IProduct[]> => {
  const {data} = await youtube.get('/', {
    params: {
      q: query
    }
  });
  return data?.items;
}