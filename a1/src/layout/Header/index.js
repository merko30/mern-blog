import { useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

import useSession from "hooks/useSession";

import Button from "shared/Button";

import MenuButton from "./MenuButton";
import NavItem from "./NavItem";
import { logout } from "auth/auth.actions";

const Header = () => {
  const [active, setActive] = useState(false);

  const { session: loggedIn } = useSession();

  const { mutate: logoutUser } = useMutation((data) => logout(data), {
    // onSuccess: () => navigate("/"),
  });

  const isActive = active ? "flex" : "hidden";
  return (
    <header className="shadow py-4">
      <div className="container px-6 flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/img/blog.svg`}
            alt="blog logo"
            className="w-8 h-8"
            style={{ transform: "rotate(24deg)" }}
          />
        </Link>
        <MenuButton onClick={() => setActive(!active)} />
        <ul
          className={`${isActive} my-3 md:my-0 w-full md:w-auto md:items-center px-2 md:px-0 flex-col md:flex md:flex-row`}
        >
          {!loggedIn && <NavItem to="/register">Register</NavItem>}
          {!loggedIn && <NavItem to="/login">Login</NavItem>}
          {loggedIn && <NavItem to="/posts/create">Add post</NavItem>}
          {loggedIn && <NavItem to="/profile">Profile</NavItem>}
          {loggedIn && (
            <Button
              color="yellow"
              classes="my-4 border-b md:my-0 md:border-0 md:mx-2"
              onClick={() => logoutUser()}
            >
              Logout
            </Button>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;