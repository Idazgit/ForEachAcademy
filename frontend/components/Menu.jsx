export function Menu({ http_code, tag, message }) {
  return (
    <div className={"menu-container"}>
      <div className={"http_code-container"}>{http_code}</div>
      <div className={"tag-container"}>{tag}</div>
      <div className={"message-container"}>{message}</div>
    </div>
  );
}
