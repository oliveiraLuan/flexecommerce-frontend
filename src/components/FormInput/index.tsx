export default function FormInput(props : any){
    
    const {validation, invalid = "false", dirty = "false", onTurnDirty, ...inputProps} = props;


    function handleOnBlur(){
        onTurnDirty(props.name);
    }

    
    return (
        <input {...inputProps} 
        data-invalid={invalid} 
        data-dirty={dirty}
        onBlur={handleOnBlur}
        />
        );
}