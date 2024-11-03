import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input, CardBody, Card, CardHeader, FormFeedback } from "reactstrap";


const initial={
    ad:"",
    soyad:"",
    email:"",
    password:""
}
const error={
    ad:false,
    soyad:false,
    email:false,
    password:false
}
export const errorMessage={
    ad:"en az 3 karakter olmalı",
    soyad:"en az 3 karakter olmalı",
    email:"geçerli bir email giriniz",
    password:"en az 8 karakter, büyük-küçük harf, sembol ve sayı içermeli"
}



export default function Login(){
    const [formData, setFormData] =useState(initial)
    const [errors,setErrors] =useState(error);
    const [isValid,setIsValid] =useState(false)
    const [id,setId] =useState("")


    const validateEmail = (email) => {
        return String(formData.email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
        };

    const paswordRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d|.*\W).{8,}$/;

    const handleChange = (event)=>{
        const{name, value}=event.target
        setFormData({...formData,[name]:value})

        if(name ==="ad"){
            if(value.trim().length>=3){
                setErrors({...errors,[name]:false})
            } else {
                setErrors({...errors,[name]:true})
            }
        }

        if(name ==="soyad"){
            if(value.trim().length>=3){
                setErrors({...errors,[name]:false})
            } else {
                setErrors({...errors,[name]:true})
            }
        }

        if(name ==="email"){
            if(validateEmail(value)){
                setErrors({...errors,[name]:false})
            } else {
                setErrors({...errors,[name]:true})
            }
        }
        if(name ==="password"){
            if(paswordRegex.test(value)) {
                setErrors({...errors,[name]:false})
            } else {
                setErrors({...errors,[name]:true})
            }
        }

    }

    useEffect(()=>{
        if(formData.ad.trim().length>=3 && formData.soyad.trim().length>=3 && validateEmail(formData.email) && paswordRegex.test(formData.password)){
            setIsValid(true)
        } else {
            setIsValid(false)
        }

    },[formData])


    const handleSubmit = (event)=>{
        event.preventDefault()
        if(!isValid) return

        axios
        .post("")
        .then((response)=>{
            setFormData(initial)
            setId(response.data.id)
            
        })
        .catch((error)=>{
            console.log(error)

        })

    }









    return(
        <>
        <Card>
            <CardHeader>Kayıt Ol</CardHeader>
            <CardBody>
                <Form>
                    <FormGroup>
                        <Label for="ad">Name</Label>
                        <Input id="ad" 
                                name="ad" 
                                placeholder="Adınızı giriniz" 
                                type="text"
                                onChange={handleChange}
                                value={formData.ad}
                                invalid={errors.ad}
                                data-cy="ad-input"
                                ></Input>
                                {errors.ad && <FormFeedback data-cy="error-messages">{errorMessage.ad}</FormFeedback>}
                    </FormGroup>

                    <FormGroup>
                        <Label for="soyad">Surname</Label>
                        <Input id="soyad" 
                                name="soyad" 
                                placeholder="Soyadınızı giriniz" 
                                type="text"
                                onChange={handleChange}
                                value={formData.soyad}
                                invalid={errors.soyad}
                                data-cy="soyad-input"
                                ></Input>
                                {errors.soyad && <FormFeedback data-cy="error-messages">{errorMessage.soyad}</FormFeedback>}
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">email</Label>
                        <Input id="email" 
                                name="email" 
                                placeholder="Geçerli bir email giriniz" 
                                type="email" 
                                onChange={handleChange}
                                value={formData.email}
                                invalid={errors.email}
                                data-cy="email-input"
                                ></Input>
                                {errors.email && <FormFeedback data-cy="error-messages">{errorMessage.email}</FormFeedback>}
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">password</Label>
                        <Input id="password" 
                                name="password" 
                                placeholder="Güçlü bir parola oluşturunuz" 
                                type="password"
                                onChange={handleChange}
                                value={formData.password}
                                invalid={errors.password}
                                data-cy="password-input"
                                ></Input>
                                {errors.password && <FormFeedback data-cy="error-messages">{errorMessage.password}</FormFeedback>}
                    </FormGroup>

                    <Button onChange={handleSubmit} disabled={!isValid} data-cy="submit-button">Kayıt Ol</Button>
                </Form>
            </CardBody>
        </Card>
        
        </>
    )
}