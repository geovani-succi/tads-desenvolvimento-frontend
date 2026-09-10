import React from 'react'

const Events = () => {
    const handleClick = (e) =>{
        console.log(e);
        alert("Executou");
    }

    const renderizarAlgumaCoisa = (x) =>{
        if(x){
            return <h1>Renderizando isso!</h1>
        }
        else{
            return <h1>Renderizando outra coisa</h1>
        }
    }

  return (
    <div>
        <div>
            <button onClick={() => alert("Testando um Evento")}>Clique Aqui</button>
        </div>
        <div>
            <button onClick={handleClick}>Clique aqui - Com função</button>
        </div>

        {renderizarAlgumaCoisa(true)}
        {renderizarAlgumaCoisa(false)}
    </div>
  )
}

export default Events