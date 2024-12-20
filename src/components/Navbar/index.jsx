import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, DarkThemeToggle, Flowbite } from "flowbite-react";
import logoDark from "../../img/logo.png";
import logoLight from "../../img/logoLight.png";

export default function NavBar() {
  const [logo, setLogo] = useState(logoDark);
  const navItems = [
    {
      id: 1,
      title: "Home",
      to: "/",
    },
    {
      id: 2,
      title: "Projetos",
      to: "/projetos",
    },
    {
      id: 3,
      title: "Skills",
      to: "/skills",
    },
    {
      id: 4,
      title: "Sobre",
      to: "/sobre",
    },
    {
      id: 5,
      title: "Contato",
      to: "/contato",
    },
  ];

  function handleLogo() {
    setLogo(!logo);
  }

  useEffect(() => {
    if (logo) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [logo]);

  return (
    <Navbar className="fixed top-0 z-50 w-full bg-black/70 px-10 shadow-md shadow-orange-500 dark:bg-black/70 dark:shadow-cyan-500">
      <div className="flex gap-x-3">
        <NavLink to={"/"}>
          {logo ? (
            <img
              src={logoDark}
              className="w-44"
              alt="Logotipo escrito Lirodev"
            />
          ) : (
            <img
              src={logoLight}
              className="w-44"
              alt="Logotipo escrito Lirodev"
            />
          )}
        </NavLink>

        <Flowbite>
          <DarkThemeToggle
            onClick={handleLogo}
            className="rounded-full border-4 border-gray-300 px-2 py-1 text-gray-300 hover:border-orange-500 hover:bg-transparent hover:text-orange-500 focus:ring-transparent dark:border-cyan-400 dark:text-cyan-400 dark:hover:border-purple-700 dark:hover:bg-transparent dark:hover:text-purple-700 dark:focus:ring-transparent"
          />
        </Flowbite>
      </div>
      <Navbar.Toggle className="bg-transparent p-3 text-orange-500 hover:bg-transparent focus:bg-transparent focus:ring-orange-500 dark:text-cyan-400 dark:hover:bg-transparent dark:focus:bg-transparent dark:focus:ring-cyan-400 md:hidden" />

      <Navbar.Collapse>
        <ul className="mt-4 flex flex-col gap-1 md:mt-0 md:flex-row md:text-sm md:font-medium">
          {navItems.map((item) => (
            <Navbar.Link key={item.id}>
              <NavLink
                to={item.to}
                className="px-4 py-3 text-lg font-semibold uppercase tracking-wider text-gray-300 hover:text-orange-500 dark:text-cyan-400 dark:hover:text-purple-600 md:px-2 lg:px-3"
              >
                {item.title}
              </NavLink>
            </Navbar.Link>
          ))}
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}
