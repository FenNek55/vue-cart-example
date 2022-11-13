export interface WatchData {
  brand: string,
  image: string,
  name: string,
  price: number,
  id: number
}

export interface CartData {
  watchData: WatchData,
  quantity: number
}