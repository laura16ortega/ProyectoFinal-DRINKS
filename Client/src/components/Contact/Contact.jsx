import React from 'react'
import useForm from './useForm';

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
        <div style={{ marginTop: "7rem" }}>
            <div>
                {/*<img src="https://cdn.discordapp.com/attachments/783048528128770108/1032273249628868638/pexels-evg-kowalievska-1128259.jpg" alt="not found" />*/}
            </div>
            <div>
                <form onSubmit={e => sendEmail(e)}>
                    <div>
                        <label>Name</label>
                        <input value={input.user_name} type="text" name="user_name" onChange={e => handleInput(e)} autoComplete="off"/>
                        {errors.user_name && <p>{errors.user_name}</p>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input value={input.user_email} type="email" name="user_email" onChange={e => handleInput(e)}/>
                        {errors.user_email && <p>{errors.user_email}</p>}
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea value={input.message} type="text" name="message" onChange={e => handleInput(e)} autoComplete="off" style={{ resize: "none" }}/>
                        <input type="submit" value="Send" />
                        {errors.message && <p>{errors.message}</p>}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact