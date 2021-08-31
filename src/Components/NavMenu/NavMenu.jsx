// import { CustomNavLink } from './NavMenu.styled';
import { NavLink } from 'react-router-dom';
import { CustomNavLink } from './NavMenu.styled';

const NavMenu = () => {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <CustomNavLink to="/contacts">Контакты</CustomNavLink>
    </nav>
  );
};

export default NavMenu;

//  {
//    isLoggedIn && (
//      <>
//        <NavLink
//          to="/todos"
//          exact
//          style={styles.link}
//          activeStyle={styles.activeLink}
//        >
//          Заметки
//        </NavLink>
//        <NavLink
//          to="/upload"
//          exact
//          style={styles.link}
//          activeStyle={styles.activeLink}
//        >
//          Загрузить
//        </NavLink>
//      </>
//    );
//  }
