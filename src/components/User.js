const User = (props) => {
  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <h3>Location : Pune</h3>
      <h4>Contact : @ErShubham4u</h4>
    </div>
  );
};

export default User;
