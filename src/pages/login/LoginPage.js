import React, {useState} from 'react'
import {MainContainer,LoginPanel,LoginHeader,ImagePanel, LoginText,LoginForm,LoginImage, LoginInputContainer,ForgotPassword} from './styles'
import {Input} from '../../ui/forms'
import { Link, useNavigate } from 'react-router-dom';
import {Button} from '../../ui/buttons'
import logo from '../../img/logo.png'


function LoginContainer(props){

    let navigation = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onHandleSubmit(e){
        e.preventDefault();
        navigation('dashboard');
        // console.log(email, password)
    }
    
   
    return(
        
        <MainContainer>

          
            <LoginPanel>

              <div>
              {/* <LoginImage src={logo} alt="Logo" width="20%" margin="0 0 4rem 0" /> */}

                <LoginHeader>Welcome!</LoginHeader>
                <LoginText>Login to access your sneakerz</LoginText>

                <LoginForm onSubmit={onHandleSubmit}>

                  <LoginInputContainer>
                      <Input type="email" placeholder='Email' margin="3rem 0" required onChange={(e)=> setEmail(e.target.value)} />
                
                      <Input type="password" placeholder='Password' required onChange={(e)=> setPassword(e.target.value)} />

                      <Link to='/'>
                          <ForgotPassword>Forgot Password?</ForgotPassword>
                      </Link>

                      <Button type='submit' bgcolor="red" color="white" padding="0.5rem 3rem" fontweight="bold" boxshadow="0 4px 4px 0 black" radius="3px">LOGIN</Button>
                  </LoginInputContainer>
                </LoginForm>

                </div>

            </LoginPanel>

            <ImagePanel>
                <LoginImage src={logo} alt="Logo" width="30%" margin="0 0 2rem 0" />
                <LoginText color='white'>SneakerHeadz is all about getting rare, limited-only,best of sneakers and reselling them for other sneakerheadz to enjoy.</LoginText>
            </ImagePanel>
         

            
        </MainContainer>  
        
    )
}

export default LoginContainer