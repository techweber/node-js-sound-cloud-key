const sckey = require('soundcloud-key-fetch');

sckey.fetchKey().then(key=>{
	console.log(key)
});

const key = sckey.fetchKey();


// uRH2PLTmwBOOWQ66p8O6Al9UggDWiafm