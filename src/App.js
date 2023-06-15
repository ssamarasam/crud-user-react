import { Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import AddUser from "./Pages/AddUser";
import "./App.css";
import UsersList from "./Pages/UsersList";
import OtherLayout from "./Pages/OtherLayout";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import { useState } from "react";
import NotFound from "./Pages/NotFound";
import { useNavigate } from "react-router-dom";
import EditUser from "./Pages/EditUser";

const App = () => {
  const [users, setUsers] = useState([
    { id: "1", name: "John Smith", department: "CSE" },
    { id: "2", name: "Sam S", department: "EEE" },
    { id: "3", name: "Maria S", department: "MECH" },
  ]);

  const [selectedUser, setSelectedUser] = useState("");
  const [selectedEditUser, setSelectedEditUser] = useState("");

  const addingUser = (newUserData) => {
    let originalUsers = [...users];
    setUsers([...users, { ...newUserData, id: users.length + 1 }]);
  };

  const updatingUser = (updateduser) => {
    let originalUsers = [...users];
    console.log("in updating user: ", updateduser);
    const updatedUsers = users.map((u) =>
      u.id === updateduser.id ? updateduser : u
    );
    console.log("after update: ", updatedUsers);
    setUsers(updatedUsers);
    navigate(`/users`);
  };

  const navigate = useNavigate();

  const handleDelete = (user) => {
    // console.log("in handle delete", user);
    const originalUsers = [...users];
    const updatedUsers = users.filter((u) => u.id !== user.id);
    setUsers(updatedUsers);
    navigate(`/users`);
  };

  const handleUpdate = (user) => {
    const originalUsers = [...users];
    const updatedUsers = users.map((u) => (u.id === user.id ? user : u));
    setUsers(updatedUsers);
    navigate(`/users`);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="">
          <li className="">
            <Link to="/">Home</Link>
          </li>

          <li className="">
            <Link to="/users">Users List</Link>
          </li>
          <li className="">
            <Link to="/users/add">Add User</Link>
          </li>
        </ul>
      </nav>
      {/* <aside>
        <Routes location={"/books"}>
          <Route path="/books" element={<BookSideBar />} />
        </Routes>
      </aside> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users">
          <Route
            index
            element={
              <UsersList
                users={users}
                onSelect={(user) => {
                  console.log("selected user", user);
                  setSelectedUser(user);
                }}
              />
            }
          />
          <Route
            path=":id"
            element={
              <User
                user={selectedUser}
                handleDelete={handleDelete}
                onEdit={(user) => setSelectedEditUser(user)}
              />
            }
          />
          <Route
            path=":id/editUser"
            element={
              <EditUser
                selectedEditUser={selectedEditUser}
                updatingUser={updatingUser}
              />
            }
          />
          <Route path="add" element={<AddUser addingUser={addingUser} />} />
        </Route>
        <Route element={<OtherLayout />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
