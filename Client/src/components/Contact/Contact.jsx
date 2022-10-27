import React from 'react'
import useForm from './useForm';
import s from "./Contact.module.css"

const Contact = () => {

    const InitialState = {
        user_name: "",
        user_email: "",
        message: ""
    }

    const {
        errors,
        input,
        handleInput,
        sendEmail
    } = useForm(InitialState)


    return (
        <div style={{ marginTop: "6rem", display: "flex" }}>
                <img src="https://cdn.discordapp.com/attachments/783048528128770108/1032273249628868638/pexels-evg-kowalievska-1128259.jpg" alt="not found" style={{flex: "1", height: "100vh", objectFit: "cover"}}/>

            <div style={{flex: "1", display: "flex", justifyContent: "center", backgroundColor: "black", flexDirection: "column"}}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2rem", textAlign: "center"}}>
                <h1>Ponte en contacto</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis repellat temporibus repudiandae iusto dolor. Odio impedit voluptas reiciendis odit distinctio atque. Sit consequuntur ad magnam aliquam veritatis earum repellat!</span>
                </div>
                <form onSubmit={e => sendEmail(e)} style={{padding: "2rem"}}>
                    <div>
                        <label>Name</label>
                        <input value={input.user_name} type="text" name="user_name" onChange={e => handleInput(e)} autoComplete="off" className={s.contactInput}/>
                        {errors.user_name && <p className={s.errorText}>{errors.user_name}</p>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input value={input.user_email} type="email" name="user_email" onChange={e => handleInput(e)} className={s.contactInput}/>
                        {errors.user_email && <p className={s.errorText}>{errors.user_email}</p>}
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea value={input.message} type="text" name="message" onChange={e => handleInput(e)} autoComplete="off" style={{ resize: "none" }} className={s.contactInput} rows="3"/>
                        {errors.message && <p className={s.errorText}>{errors.message}</p>}
                    </div>
                    <div>
                    <button type="submit" className={s.submitButton}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact

/*

<input type="submit" value="Send"/>

*/