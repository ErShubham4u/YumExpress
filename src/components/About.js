// import React from "react";
// import User from "./User";
// import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1> About </h1>
//       <User
//         name={"Abhi By Functional Component"}
//         location={"Pune"}
//         contact={"@abhi"}
//       />
//       <UserClass
//         name={"Ravi By Class Based Component"}
//         location={"Mumbai"}
//         contact={"@ravi"}
//       />
//     </div>
//   );
// };

// export default About;

import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor Call");
  }

  componentDidMount(){
    console.log("Parent CDM Call")
  }

  render() {
    console.log("Parent Render Call");
    return (
      <div>
        <h1> About </h1>
        <User />
        <UserClass
          name={"Ravi By Class Based Component"}
          location={"Mumbai"}
          contact={"@ravi"}
        />
      </div>
    );
  }
}

export default About;
