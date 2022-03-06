import React, { useContext, useState } from "react";
import Context from "../context/Context";

function NewLineForm() {
  const { data, setData } = useContext(Context);
  const [newLine, setNewLine] = useState({});

  /* salva mudanças do input no estado local */
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewLine({ ...newLine, [name]: value });
  };

  /* Salva nova linha no context */
  const handleSubmit = () => {
    const arrayNewLine = Object.values(newLine);
    setData([...data, arrayNewLine]);
  };

  return (
    <div style={{ margin: "10px", textAlign: "center" }}>
      <br />
      <hr />
      <h2 className='text-muted'>Adicione uma nova linha a tabela aqui:</h2>
      {data[0].map((category, index) => (
        <input
          key={index}
          name={category}
          onChange={handleChange}
          placeholder={`Digite aqui o ${category}`}
          value={newLine[category]}
        />
      ))}
      <button
        type='submit'
        className='btn btn-outline-dark'
        onClick={handleSubmit}
      >
        Criar nova linha
      </button>
      <hr />
      <br />
    </div>
  );
}

export default NewLineForm;
