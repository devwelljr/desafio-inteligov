import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import Context from "../context/Context";

import Header from "../components/Header";
import DropFileInput from "../components/DropFileInput";

import ContainerTable from "../styles/table";

function MyTable() {
  const { data } = useContext(Context);

  return (
    <>
      <Header />
      <DropFileInput />
      <ContainerTable>
        {data.length > 0 ? (
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                {data[0].map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {data[1].map((id, index) => (
                  <th key={index}>{id}</th>
                ))}
              </tr>
              <tr>
                {data[2].map((name, index) => (
                  <th key={index}>{name}</th>
                ))}
              </tr>
              <tr>
                {data[3].map((phone, index) => (
                  <th key={index}>{phone}</th>
                ))}
              </tr>
            </tbody>
          </Table>
        ) : null}
      </ContainerTable>
    </>
  );
}

export default MyTable;
