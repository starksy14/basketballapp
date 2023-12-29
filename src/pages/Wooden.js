import { Outlet } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Wooden = () => {
  return (
    <>
    <h2>Wooden Conference</h2>
      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Select team
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/Purdue">Purdue</Dropdown.Item>
          <Dropdown.Item href="/UCLA">UCLA</Dropdown.Item>
          <Dropdown.Item href="#/action">Washington</Dropdown.Item>
          <Dropdown.Item href="#/action">VCU</Dropdown.Item>
          <Dropdown.Item href="#/action">San Jose State</Dropdown.Item>
          <Dropdown.Item href="#/action">Portland State</Dropdown.Item>
          <Dropdown.Item href="#/action">Penn</Dropdown.Item>
          <Dropdown.Item href="#/action">Northeastern</Dropdown.Item>
          <Dropdown.Item href="#/action">Evansville</Dropdown.Item>
          <Dropdown.Item href="#/action">Marist</Dropdown.Item>
          <Dropdown.Item href="#/action">William & Mary</Dropdown.Item>
          <Dropdown.Item href="#/action">Delaware State</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
      <Outlet />
    </>
  );
}

export default Wooden;