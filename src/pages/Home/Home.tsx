import type React from "react";
import "./Home.css";

const Home = ({ children }: { children: React.ReactNode }) => {
   return <section className="home">{children}</section>;
};

export default Home;
