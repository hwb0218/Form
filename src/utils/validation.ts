export const minLength = (length: number) => (v: string) => {
  return v.length < length ? `${length}자 이상 입력해주세요.` : null;
}

export const maxLength = (length: number) => (v: string) => {
  return v.length > length ? `${length}자 이하 입력해주세요.` : null;
}