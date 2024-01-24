export function update(inputs: any, name: string, newValue: any){
    return ({...inputs, [name] : {...inputs[name], value : newValue}});
}

export function toValues(inputs : any){
    const data : any = {};
    for(const name in inputs){
       data[name] = inputs[name].value; 
    }
    return data;
}

export function updateAll(inputs: any, newValues: any){
    const newInputs : any = {};
    for(const name in inputs){
        newInputs[name] = { ...inputs[name], value : newValues[name] } ;
    }
    return newInputs;
}

export function validate(inputs: any, name : any){
    if(!inputs[name].validation){
        return inputs;
    }
    const value  = inputs[name].value;
    const isInvalid = !inputs[name].validation(value);

    return { ...inputs, [name] : {...inputs[name], invalid: isInvalid.toString()}}
}

export function toDirty(inputs: any, name: any){
    return {...inputs, [name] : {...inputs[name], dirty : "true"}};
}

export function updateAndValidate(inputs: any, name: string, newValue: any){
    const formUpdated = update(inputs, name, newValue);
    return validate(formUpdated, name);
}

export function dirtyAndValidate(inputs: any, name: string){
    const formDirty = toDirty(inputs, name);
    return validate(formDirty, name);
}

export function toDirtyAll(inputs: any){
    const newInputs : any = {};

    for(const name in inputs){
        newInputs[name] = {...inputs[name], dirty: "true"}
    }
    return newInputs;
}

export function validateAll(inputs: any){
    const newInputs : any = {};

    for(const name in inputs){
        if(inputs[name].validation){
            const isInvalid = !inputs[name].validation(inputs[name].value);
            newInputs[name] = {...inputs[name], invalid: isInvalid.toString()};
        } else {
            newInputs[name] = {...inputs[name]};
        }
    }
    return newInputs;
}

export function dirtyAndValidateAll(inputs : any){
    return validateAll(toDirtyAll(inputs));
}

export function hasAnyInvalid(inputs : any){
    for(const name in inputs){
        if(inputs[name].invalid === "true" && inputs[name].dirty === "true"){
            console.log(inputs[name]);
            return true;
        }
    }
    return false;
}
