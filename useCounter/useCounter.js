import { useState } from "react"


export const useCounter = (initialValue = 10) => {
    // Hooks
    const [counter, setCounter] = useState(initialValue)

    //                                              Funciones
    // Increment
    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    {
        // cuando se quiera enviar el incremento en un valor en especifico se debe va pasar la variable y este se modifica mediante una funcion de flecha en donde se especifica su valor de incremento ejemplo: () => increment(3) --- Linea 14 en CounterWithCustomHook.jsx
    }
    const increment = (value = 1) => {
        setCounter( (current) => current + value );
    }

    // reset
    const reset = () => {
        setCounter(initialValue)
    }

    // Decrement
    const decrement = (value = 1) => {
        setCounter( (current) => current - value );
    }

    //                                   Funciones para un carrito de compras
    
    const decrementCart = () => {
        if(counter === 0) return;
        setCounter (counter - 1)
    }

    // Stock temporal 
    let stock = 15

    const incrementStock = () => {
        if (counter >= stock) {
        } else {
            setCounter(counter + 1) 
        }
    }




    return{
        counter,
        increment,
        reset,
        decrement,
        decrementCart,
        incrementStock
    }
}