export const LoginStart = (userCredentials)=>({
    type:"LOGIN_START"
})

export const LoginSuccess = (user)=>({
    type:"LOGIN_START",
    playload:user
})

export const LoginFailure = ()=>({
    type:"LOGIN_FAILURE"
})

export const Logout = ()=>({
    type:"LOG_OUT"
})

export const UpdateStart = (userCredentials)=>({
    type:"UPDATE_START"
})
export const UpdateSuccess = (user)=>({
    type:"UPDATE_SUCCESS",
    playload:user
})

export const UpdateFailure = ()=>({
    type:"UPDATE_FAILURE"
})


