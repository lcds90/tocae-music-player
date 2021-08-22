import { Navbar, Logo } from './styles';

const Nav = ({ children }) => (
  <Navbar>
    <Logo>Tocaê</Logo>
    {children}
  </Navbar>
);

export default Nav;
