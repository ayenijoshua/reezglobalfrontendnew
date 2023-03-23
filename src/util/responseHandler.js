import { notification } from "./notification"

export const LogError = (commit,err,commitType)=>{
    if(err.response !== undefined){
        let {response} = err
        //console.log(err.response)
        response.status==422 ? notification.warning(handleError(response.data.errors)) : (response.data.message != undefined) 
        ? notification.warning(response.data.message) : notification.warning('An error occred')
    }else{
        console.log(err)
        notification.warning("Response not found")
    }
    commit(commitType,null,{root:true})
}

export function handleError(errors){
    if(Array.isArray(errors) || Object.entries(errors).length > 0){
        for(const error in errors){
            let parentErr = errors[error]
            if(!Array.isArray(parentErr)){
                return parentErr
            }
            for(const err in parentErr){
                return parentErr[err]
            }
        }
    }
}

export const processResponse = (commit,res,commitType,successMsg=null)=>{
    if(res.status !== undefined){
        let {status,message,data} = res
        if(status==200){
            let realData = data.data == undefined? data: data.data
           if(commit) commit(commitType,realData)
           if(successMsg) notification.success(successMsg)
        }else{
            notification.warning(message)
        }
    }else{
        notification.warning("response not found")
    }
}