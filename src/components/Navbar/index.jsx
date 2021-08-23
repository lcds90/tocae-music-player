import logo from 'Assets/logo.svg';
import {
  FaFacebook, FaInstagram, FaLinkedin, FaYoutube,
} from 'react-icons/fa';
import {
  ContainerMediaSocial, Credits, Navbar, Logo,
} from './styles';

const Nav = ({ children }) => (
  <Navbar>
    <Logo src={logo} alt="" />
    <ContainerMediaSocial>
      <a href="https://www.facebook.com/manipulae/" target="_blank" rel="noreferrer">
        <FaFacebook color="#85cfc9" fontSize="2rem" title="Página do Facebook da Manipulaê" />
      </a>
      <a href="https://www.instagram.com/manipulaebr/?hl=pt-br" target="_blank" rel="noreferrer">
        <FaInstagram color="#85cfc9" fontSize="2rem" title="Página do Instagram da Manipulaê" />
      </a>
      <a href="https://www.linkedin.com/company/manipula%C3%AA/" target="_blank" rel="noreferrer">
        <FaLinkedin color="#85cfc9" fontSize="2rem" title="Página do Linkedin da Manipulaê" />
      </a>
      <a href="https://www.youtube.com/channel/UCsW1M0ci-vcxcv5PPb9VFwg" target="_blank" rel="noreferrer">
        <FaYoutube color="#85cfc9" fontSize="2rem" title="Página do Youtube da Manipulaê" />
      </a>
    </ContainerMediaSocial>
    {children}
    <Credits>
      Feito com 💙 por
      <a href="https://lcds.vercel.app/" target="_blank" rel="noopener noreferrer">Leonardo Santos</a>
    </Credits>
  </Navbar>
);

export default Nav;
