// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
    {
      name: "Craig",
      photo: "https://gp1.wac.edgecastcdn.net/802892/http_public_production/artists/images/973200/original/resize:248x186/crop:x0y1w248h186/hash:1466665265/website_Croig___Euton_1284180320.jpg?1466665265",
      score: 
        ["5","1","4","4","5","1","1","2","4","4"]
    },
    {
        name:"George",
        photo:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1067038035445866497%2FdoANxvDL.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fthebigperc&docid=5ePBpCzFiJ2BHM&tbnid=8qBIhEOx2nwi6M%3A&vet=10ahUKEwiAzcH-mojiAhUDneAKHbO5A8sQMwhvKCcwJw..i&w=419&h=419&bih=576&biw=1366&q=craig%20dwyer&ved=0ahUKEwiAzcH-mojiAhUDneAKHbO5A8sQMwhvKCcwJw&iact=mrc&uact=8",
        score:["1","2","3","4","5","4","2","3","4","5"]
    },
    {   name:"John",
        photo:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fpmcvariety.files.wordpress.com%2F2017%2F01%2Fjohn-legend-elysium1.jpg%3Fcrop%3D0px%252C38px%252C1000px%252C563px%26resize%3D1000%252C563&imgrefurl=https%3A%2F%2Fvariety.com%2F2018%2Ftv%2Fnews%2Fjohn-legend-the-voice-season-16-1202940569%2F&docid=oRGWDv59M3T7FM&tbnid=k3UtXHXcrbhnTM%3A&vet=10ahUKEwi70vfDm4jiAhVxUN8KHdD3AUYQMwhtKAQwBA..i&w=1000&h=563&bih=576&biw=1366&q=john&ved=0ahUKEwi70vfDm4jiAhVxUN8KHdD3AUYQMwhtKAQwBA&iact=mrc&uact=8",
        score: ["3","2","4","4","2","1","2","3","4","5"]
    },       
    {
        name:"Mando",
        photo:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1227%2F1058%2Fproducts%2F1_d69e40a5_1024x1024.png%3Fv%3D1529010180&imgrefurl=https%3A%2F%2Fshop.skyou.com%2Fproducts%2Fthe-lit-mangie-squad-hoddie&docid=N0le1RBD8n6KoM&tbnid=DEInFCq4rUutpM%3A&vet=12ahUKEwjV3-3fm4jiAhWhneAKHQEICoU4ZBAzKB8wH3oECAEQIA..i&w=1024&h=1024&itg=1&bih=576&biw=1366&q=mangie&ved=2ahUKEwjV3-3fm4jiAhWhneAKHQEICoU4ZBAzKB8wH3oECAEQIA&iact=mrc&uact=8",
        score: ["1","2","3","4","5","1","2","3","4","5"]
    },
    {
        name:"Dillon",
        photo:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.biography.com%2F.image%2Far_1%3A1%252Cc_fill%252Ccs_srgb%252Cg_face%252Cq_auto%3Agood%252Cw_300%2FMTE5NTU2MzE2MDc3MTk2ODEx%2Fmatt-dillon-329620-1-402.jpg&imgrefurl=https%3A%2F%2Fwww.biography.com%2Fpeople%2Fmatt-dillon-329620&docid=r4dVrNdIxM7orM&tbnid=-MaDgUj3_-bNVM%3A&vet=10ahUKEwiG8qX2m4jiAhUBn-AKHVrJCVIQMwidAShFMEU..i&w=300&h=300&bih=576&biw=1366&q=dillon&ved=0ahUKEwiG8qX2m4jiAhUBn-AKHVrJCVIQMwidAShFMEU&iact=mrc&uact=8",
        score: ["1","2","3","4","5","1","2","3","4","5"]
    },

  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;