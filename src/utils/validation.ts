export const minLength = (length: number) => (v: string) => {
  return v.length < length ? `${length}자 이상 입력해주세요.` : undefined;
}

export const maxLength = (length: number) => (v: string) => {
  return v.length > length ? `${length}자 이하 입력해주세요.` : undefined;
}

export const checked = (checked: boolean) => {
 return checked ? undefined : '반드시 체크해주세요.';
};