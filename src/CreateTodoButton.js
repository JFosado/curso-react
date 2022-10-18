import react from "react";
import './CreateTodo.css'

function CreateTodoButton(props) {
    const onClickButton = (msg) => {
      alert(msg);
    };
    
    return (
      <>
          ✅ 
          <button
            className="CreateTodoButton"
            onClick={() => onClickButton('Aquí se debería abrir el modal')}
          >
            +
          </button>
           ❌ 
          <button
            className="CreateTodoButton"
            onClick={onClickButton('Esta función se ejecuta al inicio no al presionar el boton')}
          >
            +
          </button>
      </>
    );
  };
  export {CreateTodoButton};