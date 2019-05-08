// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
    {
      name: "Craig",
      photo: "https://gp1.wac..net/802892/http_public_production/artists/images/973200/original/resize:248x186/crop:x0y1w248h186/hash:1466665265/website_Croig___Euton_1284180320.jpg?1466665265",
      score: 
        ["5","1","4","4","5","1","1","2","4","4"]
    },
    {
        name:"Cathy",
        photo:"https://i.pinimg.com/originals/42/af/bb/42afbb67211f864691b58db9a9a701c1.jpg",
        score:["1","2","3","4","5","4","2","3","4","5"]
    },
    {   name:"Jennifer",
        photo:"https://img.vidible.tv/prod/2017-08/30/59a70f3c955a312cee21fb04/59a70f3cc5ab0e286fae7415_o_F_v0.jpg",
        score: ["3","2","4","4","2","1","2","3","4","5"]
},

    {
        name:"Mando",
        photo:"http://2.bp.blogspot.com/-_H0gTBQeRwo/VC6rHsAgT6I/AAAAAAAAASc/7-iLBGhWAXo/s1600/Anne++Hathaway+American+actress.jpg",
        score: ["1","2","3","4","5","1","2","3","4","5"]
    },
    {
        name:"Dillon",
        photo:"http://www.payvand.com/news/09/jan/Tiffany-Ariany-1.jpg",
        score: ["1","2","3","4","5","1","2","3","4","5"]
    },

  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;