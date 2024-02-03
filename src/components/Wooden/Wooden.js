import { Outlet } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Wooden = () => {
  return (
    <>
    <p>Wooden Conference</p>
      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Select team
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="Wooden/Purdue">Purdue</Dropdown.Item>
          <Dropdown.Item href="Wooden/UCLA">UCLA</Dropdown.Item>
          <Dropdown.Item href="Wooden/Washington">Washington</Dropdown.Item>
          <Dropdown.Item href="Wooden/VCU">VCU</Dropdown.Item>
          <Dropdown.Item href="Wooden/SanJoseState">San Jose State</Dropdown.Item>
          <Dropdown.Item href="Wooden/PortlandState">Portland State</Dropdown.Item>
          <Dropdown.Item href="Wooden/Penn">Penn</Dropdown.Item>
          <Dropdown.Item href="Wooden/Northeastern">Northeastern</Dropdown.Item>
          <Dropdown.Item href="Wooden/Evansville">Evansville</Dropdown.Item>
          <Dropdown.Item href="Wooden/Marist">Marist</Dropdown.Item>
          <Dropdown.Item href="Wooden/WilliamMary">William & Mary</Dropdown.Item>
          <Dropdown.Item href="Wooden/DelawareState">Delaware State</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
      <Outlet />
    </>
  );
}

export default Wooden;