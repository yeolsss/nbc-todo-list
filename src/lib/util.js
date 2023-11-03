export const validData = (value, msg, ref, setError) => {
  if (value.replaceAll(" ", "") === "") {
    alert(`${msg}이 비었습니다. \n 입력해 주세요.`);
    ref.current.focus();
    setError(true);
    return true;
  }
};
