import { useEffect, useRef, useState } from "react";
import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { reqResApi } from "../api/reqRes";


export const useUsuarios = () => {
    const [usuarios, setusuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
      //Llamado a la API se usara axios es n paquete muy popular para hacer peticiones Http
      reqResApi.get<ReqResListado>('/users')
        .then(resp=>{
           //console.log(resp.data.data);
           setusuarios(resp.data.data);
        })
        .catch((err) =>{console.log(err)});
    }, [])

    useEffect(() => {
        cargaUsuarios();
      }, []);
  
      const cargaUsuarios = async() =>{
        const resp = await reqResApi.get<ReqResListado>('/users',{
          params:{
            page:paginaRef.current //paginaRef es la referencia al objeto y current en el valor del objeto
          }
        });
        // console.log(paginaRef.current)
        if(resp.data.data.length > 0){
          setusuarios(resp.data.data);
        }else{
            paginaRef.current--;
            alert('No hay mas registros');
        }
  
      }

    const paginaSiguiente = ()=>{
        paginaRef.current++;
        cargaUsuarios();
    }

    const paginaAnterior = ()=>{
        if (paginaRef.current > 1) {
            paginaRef.current--;
            cargaUsuarios();
        }
    }

    return {
        usuarios:usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
