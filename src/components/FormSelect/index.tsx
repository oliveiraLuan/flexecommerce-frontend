import Select from "react-select";

export default function FormSelect(props : any){
    
    const {validation, invalid = "false", dirty = "false", onTurnDirty, ...selectProps} = props;


    function handleOnBlur(){
        onTurnDirty(props.name);
    }

    
    return (
        <Select {...selectProps} 
        data-invalid={invalid} 
        data-dirty={dirty}
        onBlur={handleOnBlur}
        />
        );
}