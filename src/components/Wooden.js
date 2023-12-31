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
          <Dropdown.Item href="/Washington">Washington</Dropdown.Item>
          <Dropdown.Item href="/VCU">VCU</Dropdown.Item>
          <Dropdown.Item href="/SanJoseState">San Jose State</Dropdown.Item>
          <Dropdown.Item href="/PortlandState">Portland State</Dropdown.Item>
          <Dropdown.Item href="/Penn">Penn</Dropdown.Item>
          <Dropdown.Item href="/Northeastern">Northeastern</Dropdown.Item>
          <Dropdown.Item href="/Evansville">Evansville</Dropdown.Item>
          <Dropdown.Item href="/Marist">Marist</Dropdown.Item>
          <Dropdown.Item href="/WilliamMary">William & Mary</Dropdown.Item>
          <Dropdown.Item href="/DelawareState">Delaware State</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
      <Outlet />
    </>
  );
}

export default Wooden;