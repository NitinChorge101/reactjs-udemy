import { forwardRef } from "react";
import styled from "styled-components";

const Input = styled.div`
& label{
    display:block;
}
& input{
padding:7px 10px
}
`
const InputGroup = forwardRef(({ label, isTextarea, ...props }, ref) => {


    return (
        <Input>
            <label>{label}</label>
            {
                isTextarea ? <textarea {...props} ref={ref} /> : <input ref={ref} {...props} />
            }
        </Input>
    );
})

export default InputGroup;