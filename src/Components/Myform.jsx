import React, { useState } from "react";

const Myform = ({ saveData }) => {
  const [form, setForm] = useState({ product: "", price: "" });
  function handleChange({ target }) {
    setForm({ ...form, [target.id]: target.value });
  }
  function handleClick(event) {
    event.preventDefault();
    saveData(form);
    console.log(form);
  }
  return (
    <form className="form data">
      <label htmlFor="product">Produto</label>

      <input
        type="text"
        id="product"
        placeholder="Digite o produto"
        onChange={handleChange}
        value={form.product}
      />
      <label htmlFor="price">Valor</label>
      <input
        type="number"
        id="price"
        value={form.price}
        placeholder="Digite o price"
        onChange={handleChange}
      />
      <div className="buttons">
        <button onClick={handleClick}>salvar</button>
        <button>cancelar</button>
      </div>
    </form>
  );
};

export default Myform;