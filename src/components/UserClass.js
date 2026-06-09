import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child Constructor Call");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        contact: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ErShubham4u");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // const { name, location, contact } = this.props;
    const { name, location, contact } = this.state.userInfo;
    console.log("Child Render Call");

    return (
      <div className="user-card">
        <h1>Name : {name}</h1>
        <h2>Location : {location}</h2>
        <h3>Contact : {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
