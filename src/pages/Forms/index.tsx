import {
  Nav,
  NavItem,
  NavLink,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Forms() {

  return (
    <div>
      <>
        <main>
          <div className="mb-4 pb-4" />
          <section className="login-register container">
            <TabContainer defaultActiveKey="login-tab">
              <h2 className="d-none">Login &amp; Register</h2>
              <Nav
                className="nav nav-tabs mb-5"
                id="login_register"
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    className="nav-link nav-link_underscore "
                    eventKey="login-tab"
                  >
                    Login
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item" role="presentation">
                  <NavLink
                    className="nav-link nav-link_underscore"
                    eventKey="register-tab"
                  >
                    Register
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent
                defaultActiveKey="login-tab"
                className="tab-content pt-2"
                id="login_register_tab_content"
              >
                <TabPane eventKey="login-tab">
                  <LoginForm />
                </TabPane>
                <TabPane eventKey="register-tab">
                  <RegisterForm />
                </TabPane>
              </TabContent>
            </TabContainer>
          </section>
        </main>
        <div className="mb-5 pb-xl-5" />
      </>
    </div>
  );
}
