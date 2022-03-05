import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import Context from "../context/Context";

import Header from "../components/Header";
import NewLineForm from "../components/NewLineForm";
import DropFileInput from "../components/DropFileInput";

import ContainerTable from "../styles/table";

function MyTable() {
  const { data, setData } = useContext(Context);

  /* Funcao deletar linha */
  const deleteLine = (event) => {
    const elementRemove = event.target.parentNode.firstChild.textContent;
    const header = data[0];
    const newData = data.slice(1);
    const updateData = newData.filter((arr) => {
      if (Number(arr[0]) !== Number(elementRemove)) {
        return arr;
      }
    });
    const dataUpdated = [header, ...updateData];
    setData(dataUpdated);
  };

  /* Funcao que gera linhas */
  const generate = (array, index) => {
    return (
      <tr key={index} style={{ borderWidth: "0px" }}>
        {array.map((content, index) => (
          <th key={index}>{content}</th>
        ))}
        <button
          className='drop-file-preview__item__del'
          onClick={(event) => deleteLine(event)}
          style={{ border: "0px" }}
        >
          x
        </button>
      </tr>
    );
  };

  return (
    <>
      <Header />
      <DropFileInput />
      {data.length > 0 ? <NewLineForm /> : null}
      <ContainerTable>
        {data.length > 0 ? (
          <>
            <Table striped bordered hover variant='dark'>
              <thead>
                <tr style={{ borderWidth: "0px" }}>
                  {data[0].map((column, index) => (
                    <th key={index}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ borderTop: "0px" }}>
                {data.slice(1).map((array, index) => generate(array, index))}
              </tbody>
            </Table>
          </>
        ) : null}
      </ContainerTable>
    </>
  );
}

export default MyTable;
