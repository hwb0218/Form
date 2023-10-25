import { HTMLInputTypeAttribute } from "react";

export type Info = {
  name: string;
  password: string;
  confirm: boolean;
}

export type PartialInfo = {
  [infoKey in keyof Info]: Record<infoKey, Info[infoKey]>
}[keyof Info];

// type PartialInfo = { name: string } | { confirm: boolean s};

// keyof Info로 key에 접근할 경우 never는 배제됨
export type Source<T> = {
  [K in keyof Info]: Info[K] extends T ? K : never;
}[keyof Info];


export type InputBaseProps = HTMLInputTypeAttribute;
