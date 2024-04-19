"use client"
export const useCurrentUser = ()=>{
    const storageData = localStorage.getItem('data') 

    if(storageData){
      const user =  JSON.parse(storageData);
       console.log(user)
       return user;
    }
    return null;
}