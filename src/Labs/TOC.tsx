import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";


export default function TOC() {
  const { pathname } = useLocation();

    return (
      // <ul>
      //   <li><Link to="/Labs">Labs</Link></li>
      //   <li><Link to="/Labs/Lab1">Lab 1</Link></li>
      //   <li><Link to="/Labs/Lab2">Lab 2</Link></li>
      //   <li><Link to="/Labs/Lab3">Lab 3</Link></li>
      //   <li><Link to="/Kambaz">Kambaz</Link></li>
      //   <li><a href="https://github.com/nicole-contreras/web-app-cs4550-sp25" id="wd-github">View the project repository on GitHub</a></li>
      // </ul>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link to="/Labs" as={Link} active={pathname.includes("Lab1")}>Lab 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/Labs/Lab1" as={Link} >Lab 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/Labs/Lab2" as={Link} active={pathname.includes("Lab2")}>Lab 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/Labs/Lab3" as={Link} active={pathname.includes("Lab3")}>Lab 3</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/Labs/Lab4" as={Link} active={pathname.includes("Lab4")}>Lab 4</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/Kambaz" as={Link}>Kambaz</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://github.com/nicole-contreras/web-app-cs4550-sp25">My GitHub</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/Labs/Lab5" as={Link} active={pathname.includes("Lab5")}>Lab 5</Nav.Link>
          </Nav.Item>
      </Nav>
    );
  }
  