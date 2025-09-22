const user = { 
id: 1, 
profile: { 
username: "mandem", 
email: "mandem@example.com" 
}, 
settings: { 
theme: "dark", 
notifications: true 
}
}; 

function extract(){
    const {profile: {username,email},settings:{theme}} = user;

    console.log(`Your username is : ${username} 
And your email is : ${email}`);
    console.log(`Theme: ${theme}`);
}

extract();
