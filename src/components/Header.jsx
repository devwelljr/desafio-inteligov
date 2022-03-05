import React, { useContext } from "react";
import Context from "../context/Context";

import ContainerHeader from "../styles/header";

function Header() {
  const { user } = useContext(Context);

  return (
    <ContainerHeader>
      <div>
        <h1 className='display-4 font-weight-normal'>
          {user.user ? `Tabela de ${user.user}` : "Tabela do usuario"}
        </h1>
      </div>
    </ContainerHeader>
  );
}

export default Header;
