import { useEffect, useReducer } from 'react';

interface AuthState{
    validando:boolean,
    token:string | null,
    username:string,
    nombre:string
}

const initialState: AuthState = {
    validando:true,
    token:null,
    username:'',
    nombre:''
}

type LoginPayload = {  //Se puede crear un nuevo type para el payload para que no se vea todo aglomerado
    username: string,
    nombre: string
}

type AuthAction = 
    | { type:'logout' }
    | { type:'login', payload:LoginPayload }; //el payload es porque se va a recibir algo mas en la accion

const authReducer = (state: AuthState,action:AuthAction): AuthState  =>{
    switch (action.type) {
        case 'logout':
            return {
                validando:false,
                token:null,
                nombre:'',
                username:''
            };
        case 'login':
            /** 
             * Tambien se puede desestructurar el action.payload 
             * const {nombre, username} = action.payload;
             * Y el return quedaria de la siguiente manera
             * return {
                validando:false,
                token:'abc123',
                nombre:nombre,
                username:username
            }
             */
            return {
                validando:false,
                token:'abc123',
                nombre:action.payload.nombre,
                username:action.payload.username
            }
        default:
            return state;
    }
}


export const Login = () => {

    const [{validando,token,nombre}, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(()=>{
            dispatch({type:'logout'});
        },1500)
    }, []);

    const login = ()=>{
        dispatch({
            type:'login',
            payload:{
                nombre:'Fernando',
                username:'Fer'
            }
        });
    }

    const logout = ()=>{
        dispatch({type:'logout'});
    }

    if(validando){
        return(
            <>
                <h3>Login</h3>

                <div className="alert alert-info"> 
                    Validando....
                </div>

            </>
        )
    }
    

  return (
    <>
        <h3>Login</h3>

        {
            ( token) 
                ? <div className="alert alert-success"> Auntenticado como: {nombre}</div> 
                : <div className="alert alert-danger"> No auntenticado </div>
        }

        {
            (token)
                ? (<button className="btn btn-danger"
                    onClick={logout}>
                        Logout
                    </button>
                  )
                : (<button className="btn btn-primary"
                    onClick={login}>
                        Login
                    </button>
                  )
        }

        

        

        
    </>
  )
}
