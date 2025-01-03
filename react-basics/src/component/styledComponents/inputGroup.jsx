import styled from "styled-components";

const Input = styled.input`
    padding:7px 10px;
    margin-top:10px;
    &:focus{
    outline:none
    }
`
const Label = styled.label`
    margin-bottom:5px
`
const InputGroup = ({ label, ...props }) => {
    return (
        <div>
            <Label>{label}</Label>
            <Input {...props} />
        </div>
    )
}

export default InputGroup;