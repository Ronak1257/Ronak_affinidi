import Header from "./NavBar";
import type { ChildernProps } from "../types/types";
import Footer from "./Footer";

const Layout: React.FunctionComponent<ChildernProps> = ({ children }) => {
  return (
    <div className="section">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
