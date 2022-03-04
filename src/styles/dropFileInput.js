import styled from "styled-components";

export default styled.section`
  align-self: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid #019973;

  max-width: 400px;
  margin: 0;

  .drop-file-input {
    position: relative;
    width: 400px;
    height: 200px;
    border: 2px dashed var(--border-color);
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--input-bg);
  }

  .drop-file-input input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .drop-file-input:hover,
  .drop-file-input.dragover {
    opacity: 0.6;
  }

  .drop-file-input__label {
    text-align: center;
    color: var(--txt-second-color);
    font-weight: 600;
    padding: 10px;
  }

  .drop-file-input__label img {
    width: 100px;
  }

  .drop-file-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
  }

  .drop-file-preview p {
    font-weight: 500;
  }

  .drop-file-preview__item {
    position: relative;
    display: flex;
    margin-bottom: 10px;
    background-color: var(--input-bg);
    padding: 15px;
    border-radius: 20px;
  }

  .drop-file-preview__item img {
    width: 50px;
    margin-right: 20px;
  }

  .drop-file-preview__item__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .drop-file-preview__item__del {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    position: absolute;
    cursor: pointer;
  }

  .drop-file-preview__item:hover .drop-file-preview__item__del {
    opacity: 1;
  }
`;
