
export const TiposBasicos = () => {
    let nombre: string = 'Fernando';
    let edad = 27;
    const estaActivo = false;
    const poderes: string[] = ['Velocidad', 'Volar','Invisibilidad'];

  return (
    <>
        <h3>Tipos Basicos</h3>
        {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
        <hr />
        {poderes.join(', ')}
    </>
  )
}
