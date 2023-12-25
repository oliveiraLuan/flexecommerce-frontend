import { useEffect, useState } from "react";
import { UserDTO } from "../../../models/user";
import * as userService from "../../../services/user-service";

export default function AdminHome() {
  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    userService
      .findUser()
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Erro", error);
      });
  }, []);

  return (
    <main>
      <section id="admin-home-section" className="dsc-container">
        <h2 className="dsc-section-title dsc-mb20">Bem vindo {user?.name}</h2>
      </section>
    </main>
  );
}
