const sckey = require('soundcloud-key-fetch');

sckey.testKey('uRH2PLTmwBOOWQ66p8O6Al9UggDWiafm').then(result=>{

	if(result){
		console.log("The key works!!!");
	} else {
		console.log("The key didn't worked out...");		
	}

});

// uRH2PLTmwBOOWQ66p8O6Al9UggDWiafm