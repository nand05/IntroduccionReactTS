import axios from 'axios';

export const reqResApi = axios.create({
    baseURL:'https://reqres.in/api' //Solo se pone el host de la api por si se quiere llamar a mas de una funcionalidad con el mismo req
});

