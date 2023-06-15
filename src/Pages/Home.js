import React from "react";

const Home = () => {
  return (
    <>
      <p className="text-primary">Implemented CRUD in React</p>
      <br></br>
      <p>Users List page will have the list of users added.</p>
      <p>Click each user to see individual user data.</p>
      <p>
        Edit User and Delete user functionalities are inside individual User
        card.
      </p>
      <p>
        React router dom is used for rotuing and dynamic routing is implemented
        using Navigate(:id , :id/edituser).
      </p>
      <p>All the crud opterations are implemented.</p>
    </>
  );
};

export default Home;
