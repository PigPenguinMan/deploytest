import {Form} from "react-bootstrap";

const CommentInput = (props) => {
    const {setTextInput} = props; 

    return (
        <div>
            <Form.Control 
            onChange={(e) => {setTextInput(e.target.value)}} 
            type="text" style={{width : "90%"}} 
            placeholder = "20글자 이내로 작성해주세요"/>
        </div>
    );
}

export default CommentInput;