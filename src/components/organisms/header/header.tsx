import styles from "./styles.module.scss";
import { Logo } from "../../atoms/Logo";
import { MenuItem } from "@/components/atoms/menuItem";

export default function HeaderOrganism() {
  return (
    <header className={styles.header}>
      <nav className="container mx-auto px-6 py-2">
        <div
          className={`${styles["container"]} flex items-center justify-between`}
        >
          <div className="text-white font-bold text-xl">
            <a href="#">
              <Logo />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <MenuItem text="Home" />
              <MenuItem text="About" />
              <MenuItem text="Services" />
              <MenuItem text="Contact"  />
            </div>
          </div>
          <div className="md:hidden">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-white"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="mobile-menu hidden md:hidden">
          <ul className="mt-4 space-y-4">
            <li>
              <a className="block px-4 py-2 text-white bg-gray-900 rounded">
                Home
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 text-white bg-gray-900 rounded">
                About
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 text-white bg-gray-900 rounded">
                Services
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 text-white bg-gray-900 rounded">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
