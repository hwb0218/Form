export type Info = {
  name: string;
  confirm: boolean;
}

// keyof Info로 key에 접근할 경우 never는 배제됨
export type Source<T> = {
  [K in keyof Info]: Info[K] extends T ? K : never;
}[keyof Info];

