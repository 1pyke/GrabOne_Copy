import React from "react";
import Main from "../components/Main";
import Adds from "../components/Adds";
import DeliveredToInbox from "../components/DeliveredToInbox";
import Rows from "../components/Rows";
import requests from "../Requset";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Adds />
      <Main />
      <DeliveredToInbox />
      {Object.keys(requests).map((request) => (
        <Rows
          title={requests[request].title}
          fetchURL={requests[request].url}
          cards={requests[request].cards}
          key={request}
        />
      ))}
      <Footer />
    </>
  );
};

export default Home;
