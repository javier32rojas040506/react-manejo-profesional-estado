import React from "react";

function UseState(){
    const SECURITY_CODE = "paradigma";
    const [state, setState] = React.useState({ 
        inputValue: '',
        error: false, 
        loading: false,
        delete: false,
        confirm: false
    });
    const OnError = () => {
        setState( prevSate => ({
            ...prevSate,
            error: true,
            loading: false,
            inputValue:''
        }));
    };
    const Onconfirm = () => {
        setState( prevSate => ({
            ...prevSate,
            confirm: true,
            loading: false,
            inputValue:''
        }));
    };
    const OnWrite = (event) => {
        setState(prevSate =>({ 
            ...prevSate,
            inputValue:event.target.value 
            }))
    };

    const OnCheck = () => {
        setState(prevSate=> ({
            ...prevSate,
            loading:true,
            error:false
        }))
    };

    const OnDelete = () => {
        setState(prevSate=> ({
            ...prevSate,
            delete: true,
            confirm: false
        }))
    };
    const OnReset = () => {
        setState(prevSate=> ({
            ...prevSate,
            delete: false,
            confirm: false
        }))
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
                <h2>Eliminar UseState</h2>
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
                   <h2>Eliminar UseState</h2> 
                   <p>¿Desea Eliminar el UseState</p>
                   <button onClick={OnDelete}>si, Borrar</button>
                   <button onClick={OnReset}>No, Volver</button>
                </div>);
    }else{
        return (
        <div>
            <h2>UseState Fue Eliminado</h2> 
            <button onClick={OnReset}>Recuperar UseState</button>
         </div>
         );
    }
    
}



export {UseState};

    // import React from "react";

    // function UseState(){
    //     const SECURITY_CODE = "paradigma";
    //     const[inputValue, setInputValue] = React.useState('');
    //     const[error, setError] = React.useState(false);
    //     const[loading, setLoading] = React.useState(false);
    //     console.log("render");
    //     console.log("error", error);
    //     console.log("loading", loading);
    //     console.log("inputValue", inputValue);
                    

    //     React.useEffect(() => {
    //         console.log("Hook Searching State");

    //         if(!!loading){
    //             setTimeout(() =>{
    //                 console.log("Loading state...");
                    
    //                 if(inputValue !== SECURITY_CODE){
    //                     setError(true);
    //                 }
    //                 setLoading(false);
    //                 setInputValue('');
    //                 console.log("error", error);
    //                 console.log("loading", loading);
    //                 console.log("inputValue", inputValue);
    //                 console.log("Loading state DONE");
    //             }, 3000);
    //         }
    //     },[loading]);
    //     return(
    //         <div>
    //             <h2>Eliminar UseState</h2>
    //             <p>Por favor introduzca el codigo de seguridad</p>
    //             {error && <p>Error: El codigo es incorrecto</p>}
    //             {loading && <p>Loading...</p>}
    //             <input type='text' placeholder='Codigos de seguridad' value={inputValue} 
    //             onChange={ event =>  {
    //                 setInputValue(event.target.value)}}/>
    //             <button onClick={ () => {
    //                 setLoading(true)
    //                 setError(false)
    //                 console.log("error en onClick", error);
    //                 console.log("loading en onClick", loading);
    //                 console.log("inputValue en onClick", inputValue);
                    
    //                 }}>
    //                 Comprobar
    //             </button>
    //         </div>
    //     );
    // }

    // export {UseState};