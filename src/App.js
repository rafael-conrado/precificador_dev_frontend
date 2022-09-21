import React, { useEffect, useState } from "react";
import api from "./services/api";
import Navbar from "./components/Navbar";

export default function App() {
  let [service, setService] = useState(null);

  useEffect(() => {
    api
      .get("/services")
      .then((res) => res.data)
      .then((service) => {
        setService(service);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {service &&
        service.map((service) => (
          <div>
            <p> {service.name} </p>
            <p> {service.description}</p>
            <p>{service._id}</p>
            <hr></hr>
          </div>
        ))}
    </div>
  );
}
