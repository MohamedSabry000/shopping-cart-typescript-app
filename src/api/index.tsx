import FakeStore from './FakeStore';
import { IProduct } from '../@types/fakestore';

export const getList = async () : Promise<IProduct[]> => {
  const {data} = await FakeStore.get(`/products`);
  return data;
}