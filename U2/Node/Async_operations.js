function getUsers(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve([{username: 'user1', email: 'user1@gmail.com'},{username: 'user2', email: 'user2@gmail.com'},]);
        },1000);
    });
}