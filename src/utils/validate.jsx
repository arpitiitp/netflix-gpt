export const checkValidData = (email,password) =>{
    const isEmailValid= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    
    const isPasswordValid= /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()-+=])(?=\S+$).{8,20}$/.test(password);

    if(!isEmailValid) return "Emailx Id is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
}

// export default checkValidData;