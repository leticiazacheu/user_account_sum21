import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { UserConsumer } from '../../providers/UserProvider';

const Navbar = () => (
  <UserConsumer>
    { value => (
      <Menu>
        <NavLink to='/'>
          <Menu.Item>
            Home
          </Menu.Item>
        </NavLink>
        <NavLink to='/profile'>
          <Menu.Item>
            { value.username }
          </Menu.Item>
        </NavLink>
      </Menu>
    )}
  </UserConsumer>
)

export default Navbar;