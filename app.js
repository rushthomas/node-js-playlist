var fs = require('fs');

fs.mkdir('stuff2', function(){
  fs.readFile('readMe.txt', 'utf8', function(err, data){
  fs.writeFile('./stuff2/writeMe.txt', data);  
  });
});

//code
