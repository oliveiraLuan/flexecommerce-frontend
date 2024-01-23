import Select from "react-select";

export default function FormSelect(props : any){
    
    const {className, validation, invalid = "false", dirty = "false", onTurnDirty, ...selectProps} = props;

    function handleOnBlur(){
        onTurnDirty(props.name);
    }
    
    return (
        <div className={className} data-invalid={invalid} data-dirty={dirty}>
            <Select {...selectProps} onBlur={handleOnBlur}/>
        </div>
    );
}