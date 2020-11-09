db . ropa . insertMany ([ 
    {  
        _id :  1 ,  
        categoria : "Camiseta"  , 
        marca :  "Nike" ,
        nombre: "Academy 18" ,
        cantidad : 100 , 
        talla : [ "S", "M","L", "XL"] ,
        material : { A: 50 , P: 30 , S: 20   }
        
     }, 

    {  
        _id :  2 ,  
        categoria : "Sudadera"  , 
        marca :  "Adidas" ,
        nombre: "Away" ,
        cantidad : 65 , 
        talla : [ "S", "M","L", "XL"] ,
        material : { A: 30 , P: 20 , S: 50   }
    }, 

    {  
        _id :  3 ,  
        categoria : "Pantalon"  , 
        marca :  "Jordan" ,
        nombre: "Run" ,
        cantidad : 200 , 
        talla : [ "S", "M","L", "XL"] ,
        material : { A: 50 , P: 20 , S: 30   }
    }, 

    {  
        _id :  4 ,  
        categoria : "Sudadera"  , 
        marca :  "Nike" ,
        nombre: "Futura" ,
        cantidad : 150 , 
        talla : [ "S", "M","L", "XL"] ,
        material : { A: 30 , P: 50 , S: 20   }
     }, 

    {  
        _id :  5 ,  
        categoria : "Camiseta"  , 
        marca :  "Adidas" ,
        nombre: "Club" ,
        cantidad : 26 , 
        talla : [ "S", "M","L", "XL"] ,
        material : { A: 50 , P: 30 , S: 20   }

    },


    {  
        _id :  6 ,  
        categoria : "Sudadera"  , 
        marca :  "Reebok" ,
        nombre: "Tee" ,
        cantidad : 18 , 
        talla : [ "S", "M","L", "XL"] ,
        material : { A: 20 , P: 30 , S: 50   }
 
     },


     {  
        _id :  7 ,  
        categoria : "Pantalon"  , 
        marca :  "Jordan" ,
        nombre: "Big" ,
        cantidad : 197 , 
        talla : [ "S", "M","L", "XL"] ,
        material : { A: 50 , P: 25 , S: 25   }
 
     }, 


     {  
        _id :  8 ,  
        categoria : "Polo"  , 
        marca :  "Nike" ,
        nombre: "Outile" ,
        cantidad : 100 , 
        talla : [ "S", "M","L", "XL"] ,
        material : { A: 30 , P: 50 , S: 20   }
 
     }


 ]);