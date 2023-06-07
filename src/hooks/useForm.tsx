import { useState } from "react";


export const useForm = <T extends Object>(formulario: T) => {

    const [state, setState] = useState(formulario)

    const onChange = ( value: string, campo: keyof T ) =>{//keyof una llave de T
        setState({
            ...state, //Desestructuracion de formulario 
            [campo]: value //Desdpues de hacer la desestructuracion solo se va a modificar el 'value' del 'campo' que se pasa como parametro, estamos computando con los []
        });
    }

    return {
        ...state,
        state,
        onChange
    }
}
