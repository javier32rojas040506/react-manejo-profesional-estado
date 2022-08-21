import React from "react";
const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            error: false,
            loading: false,
        };
    }
    componentDidUpdate(){
        console.log("updating state...");
        if (!!this.state.loading){
            setTimeout(() =>{
                console.log("Loading state...");
                if(SECURITY_CODE !== this.state.inputValue){
                    this.setState({error: true});
                }
                this.setState({loading : false, inputValue: ''});
                console.log("Loading state DONE");
            }, 3000);
        }
    };
    render(){
        return(
            <div>
                <h2>Eliminar ClassState</h2>
                <p>Por favor introduzca el codigo de seguridad</p>
                {this.state.error && <p>Error: El codigo es incorrecto</p>}
                {this.state.loading && <p>Loading...</p>}
                <input type='text' 
                placeholder='Codigos de seguridad' 
                value={this.state.inputValue} 
                onChange={event => this.setState({inputValue: event.target.value, error: false})}/>
                <button onClick={() => this.setState({loading: true})}>Comprobar</button>
            </div>
        )
    }
};

export {ClassState};