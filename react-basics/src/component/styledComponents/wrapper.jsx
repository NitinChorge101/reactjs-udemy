
import Button from "./button";
import InputGroup from "./inputGroup";

const Wrapper = () => {

    return (
        <>
            <Button>Click Me</Button>
            <InputGroup label="Enter Email:" onChange={handleChange} />
        </>
    );
}

export default Wrapper;