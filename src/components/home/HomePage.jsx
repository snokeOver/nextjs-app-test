import React from "react";
import Bannner from "./Bannner";
import Services from "./Services";

const HomePage = () => {
  return (
    <div className="w-full">
      <Bannner />
      <div className="container mx-auto">
        <Services />
      </div>
    </div>
  );
};

export default HomePage;
