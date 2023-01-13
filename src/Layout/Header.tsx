import { useNavigate } from "react-router-dom";

type NavItem = {
  id: string;
  name: string;
  link: string;
};

const navItems: NavItem[] = [
  {
    id: "1",
    name: "Home",
    link: "/",
  },
  {
    id: "2",
    name: "Products",
    link: "/products",
  },
  {
    id: "3",
    name: "Cart",
    link: "/cart",
  },
  {
    id: "4",
    name: "Receipts",
    link: "/receipts",
  },
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='app-header'>
      <nav className='app-nav flex flex-row justify-between'>
        <h4 className=' text-blue-600 hover:text-blue-900 cursor-pointer text-2xl font-bold rounded'>
          Nozama
        </h4>
        <ul className='nav-list flex flex-row'>
          {navItems.map(
            (item: NavItem): JSX.Element => (
              <li className='nav-item ' key={item.id}>
                <h6
                  className=' text-gray-800 hover:text-blue-700 cursor-pointer font-bold py-2 px-4 rounded'
                  onClick={() => navigate(item.link)}>
                  {item.name}
                </h6>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
