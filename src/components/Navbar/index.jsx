import logo from 'Assets/logo.svg';
import { Navbar, Logo } from './styles';

const Nav = ({ children }) => (
  <Navbar>
    <Logo src={logo} alt="" />
    {children}
  </Navbar>
);

export default Nav;
