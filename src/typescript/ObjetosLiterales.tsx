interface Persona{
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion{
    pais: string;
    casa: number;
}
/**
 * 
 * Las interfaces solo sirven para dar reglas de validacion a los objetos
 */


export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Fernando',
        edad: 35,
        direccion: {
            pais:'Mexico',
            casa:95
        }
    }



  return (
    <>
        <h3>Objetos literales</h3>
        {JSON.stringify(persona)}
        <hr />
        <code>
            <pre>
                {JSON.stringify(persona)}
            </pre>
        </code>
        <hr />
        <code>
            <pre>
                {JSON.stringify(persona, null,2)}
            </pre>
        </code>
    </>
  )
}
