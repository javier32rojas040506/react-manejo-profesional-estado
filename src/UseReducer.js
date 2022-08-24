import React from "react";

const initialState = { 
    inputValue: '',
    error: false, 
    loading: false,
    delete: false,
    confirm: false
};


function UseReducer(){
    const SECURITY_CODE = "paradigma";
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const OnError = () => dispatch({type: actionTypes.ERROR});
    const Onconfirm = () => dispatch({type: actionTypes.CONFIRM});
    const OnCheck = () => dispatch({type: actionTypes.CHECK});
    const OnDelete = () => dispatch({type: actionTypes.DELETE});
    const OnReset = () => dispatch({type: actionTypes.RESET});

    const OnWrite = (event) => {
        dispatch({type: actionTypes.WRITE, payload: event.target.value});
    };

    React.useEffect(() => {
        console.log("Hook Searching State");

        if(!!state.loading){
            setTimeout(() =>{
                console.log("Loading state...");
                
                if(state.inputValue !== SECURITY_CODE){
                    OnError();
                }else{
                   Onconfirm();
                }
                console.log(state);
                console.log("Loading state DONE");
            }, 3000);
        }
    },[state.loading]);
    
    if(!state.delete && !state.confirm){
        return(
            <div>
                <h2>Eliminar UseReducer</h2>
                <p>Por favor introduzca el codigo de seguridad</p>
                {state.error && <p>Error: El codigo es incorrecto</p>}
                {state.loading && <p>Loading...</p>}
                <input type='text' placeholder='Codigos de seguridad' value={state.inputValue} 
                onChange={ event =>  OnWrite(event)}/>
                <button onClick={OnCheck}>
                    Comprobar
                </button> 
            </div>
        );
    }else if(state.confirm) {
        return (<div>
                   <h2>Eliminar UseReducer</h2> 
                   <p>¿Desea Eliminar el UseReducer</p>
                   <button onClick={OnDelete}>si, Borrar</button>
                   <button onClick={OnReset}>No, Volver</button>
                </div>);
    }else{
        return (
        <div>
            <h2>UseReducer Fue Eliminado</h2> 
            <button onClick={OnReset}>Recuperar UseReducer</button>
         </div>
         );
    }
    
}

const actionTypes = {
    ERROR: 'ERROR', 
    CONFIRM:'CONFIRM', 
    DELETE: 'DELETE',
    WRITE:'WRITE', 
    CHECK:'CHECK',
    RESET:'RESET'
};

//with Object
const reducerObject = (state, action) => ({
    'ERROR': {
    ...state,
    error: true,
    loading: false,
    inputValue:''
    }, 
    'CONFIRM':{
    ...state,
    confirm: true,
    loading: false,
    inputValue:''
    }, 
    'DELETE': {
    ...state,
    delete: true,
    confirm: false
    },
   'WRITE':{
    ...state,
    inputValue: action.payload
    }, 
    'CHECK':{
    ...state,
    loading:true,
    error:false
    },
    'RESET':{
    ...state,
    delete:false,
    confirm:false
    }

});
const reducer = (state, action) => {
    if(reducerObject(state, action)[action.type]){
        return reducerObject(state, action)[action.type];
    }else{
        return state;
    }
}

 //with switch
// const reducer = (state, action) => {
//     switch (action.type){
//         case 'ERROR':
//             return {
//                 ...state,
//                 error: true,
//                 loading: false,
//                 inputValue:''
//             };
//         case 'CONFIRM':
//             return{
//                 ...state,
//                 confirm: true,
//                 loading: false,
//                 inputValue:''
//             }
//         case 'DELETE':
//             return {
//                 ...state,
//                 delete: true,
//                 confirm: false
//             };
//         case 'WRITE':
//             return{
//                 ...state,
//                 inputValue: action.payload
//             }
//         case 'CHECK':
//             return{
//                 ...state,
//                 loading:true,
//                 error:false
//             }
//         case 'RESET':
//             return{
//                 ...state,
//                 delete:false,
//                 confirm:false
//             }
//         default:
//             return{
//                 ...state
//             }
//     }
// }

export {UseReducer};
