export const ItemCount = ({max, counter, setCounter, agregar}) => {
    const handleResta = () => {
        counter > 1 && setCounter(counter - 1);
    }
    const handleSuma = () => {
        counter < max && setCounter(counter + 1);
    }

    return (
        <div>
            <button 
                onClick={handleResta} 
                className={`btn mx-1 ${counter === 1 ? "btn-outline-danger ":"btn-outline-primary"}`} 
                disabled = {counter === 1}
                >-
            </button>
            <span className="mx-2">{counter}</span>
            <button 
                onClick={handleSuma} 
                className= {`btn mx-1 ${counter === 1 ? "btn-danger ":"btn-primary"}`} 
                disabled = {counter === max}
                >+
            </button>
            <br></br>
            <button 
                onClick={agregar} 
                className="btn btn-success my-2"
                >Agregar
            </button>
        </div>
    )
}