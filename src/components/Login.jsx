import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup, Label, Input, CardBody, Card, CardHeader } from "reactstrap";


const initial={
    ad:"",
    soyad:"",
    email:"",
    password:""
}


export default function Login(){
    const [formData, setFormData] =useState({initial})




    const handleChange = (event)=>{
        const{name, value}=event.target
        setFormData({...formData,[name]:value})

    }


    const handleSubmit = (event)=>{
        event.preventDefault()

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
                                name="Ad" 
                                placeholder="minimum 3 karakter" 
                                type="text"
                                onChange={handleChange}
                                value={formData.ad}>Ad</Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="soyad">Surname</Label>
                        <Input id="soyad" 
                                name="Soyad" 
                                placeholder="minimum 3 karakter" 
                                type="text"
                                onChange={handleChange}
                                value={formData.soyad}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">email</Label>
                        <Input id="email" 
                                name="email" 
                                placeholder="geçerli bir email" 
                                type="email" 
                                onChange={handleChange}
                                value={formData.email}>email</Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">password</Label>
                        <Input id="password" 
                                name="password" 
                                placeholder="güçlü bir parola" 
                                type="password"
                                onChange={handleChange}
                                value={formData.password}>email</Input>
                    </FormGroup>

                    <Button onChange={handleChange} >Kayıt Ol</Button>
                </Form>
            </CardBody>
        </Card>
        
        </>
    )
}