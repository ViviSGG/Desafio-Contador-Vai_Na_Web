import React, { useState } from "react";

function Main() {
  const [contador, setContador] = useState(0);
  const [aviso, setAviso] = useState("");

  function somar() {
    if (contador >= 10) {
      setAviso("Quantidade máxima atingida!");
    } else {
      setContador(contador + 1);
      setAviso("");
    }
  }

  function subtrair() {
    if (contador <= 0) {
      setAviso("Quantidade mínima atingida!");
    } else {
      setContador(contador - 1);
      setAviso("");
    }
  }

  return (
    <>
      <main>
        <section>
          <div>
            <h2>{contador}</h2>
            <button onClick={subtrair}>-</button>
            <button onClick={somar}>+</button>
          </div>
        </section>
        <section>
          <p>{aviso}</p>
        </section>
      </main>
    </>
  );
}
export default Main;
