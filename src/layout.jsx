import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full h-full md:mr-4">{children}</main>
    </>
  );
};

export default Layout;
