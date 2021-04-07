import React  from "react";
import { Form, Input } from "semantic-ui-react";
import SubmitButton from "./SubmitBotton";


const SignUpInputs = ({ signUpChange, handleSubmit, form }) => {
const signInData =[
  {type:"text", name:"username",value: form.username, icon:'user' },
  {type:"email", name:"email", value: form.email,icon:'at' },
  {type:"password", name:"password", value: form.password, icon:'lock' }
]

  return (
    <Form onSubmit={handleSubmit}>
      <p id="error-message" style={{ display: "none", color: "red" }}>
       Please add a unique username and password</p>

        {signInData.map((item,index)=>(
          <Form.Field key={index}>
          <Input type={item.type} name={item.name} placeholder={item.name}  aria-label={item.name} 
            value={item.value}  onChange={(event) => signUpChange(event)}required variant="outlined" icon={item.icon} iconPosition='left'/>
        </Form.Field>
        ))}
        <SubmitButton title= "Register"/>
    </Form>
  );
};

export default SignUpInputs;
