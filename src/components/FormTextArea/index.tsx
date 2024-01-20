export default function FormTextArea(props : any){
    
    const {validation, invalid = "false", dirty = "false", onTurnDirty, ...inputProps} = props;


    function handleOnBlur(){
        onTurnDirty(props.name);
    }

    
    return (
        <textarea {...inputProps} 
        data-invalid={invalid} 
        data-dirty={dirty}
        onBlur={handleOnBlur}
        />
        );
}