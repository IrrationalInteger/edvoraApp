import "./styles.css";
function Users(props) {
  return (
    <>
      {props.users.map((user) => (
        <div key={user.user_id} className="dataBox">
          {"Name: " + user.name}{" "}
        </div>
      ))}
    </>
  );
}
export default Users;
