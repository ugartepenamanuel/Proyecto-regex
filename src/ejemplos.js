//....$eq....//

//....En está consulta queremos sacar los valores igual a 100 en el campo cantidad.....//
/*
db.ropa.find( { cantidad: { $eq: 100 } } )
{ "_id" : 1, "categoria" : "Camiseta", "marca" : "Nike", "nombre" : "Academy 18", "cantidad" : 100, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 8, "categoria" : "Polo", "marca" : "Nike", "nombre" : "Outile", "cantidad" : 100, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 50, "S" : 20 } }

*/




//....$gt....//
//....En está consulta queremos sacar los valores mayor  a 50 en el campo cantidad....//
/*
db.ropa.find( { cantidad: { $gt: 50 } } )    
{ "_id" : 1, "categoria" : "Camiseta", "marca" : "Nike", "nombre" : "Academy 18", "cantidad" : 100, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 2, "categoria" : "Sudadera", "marca" : "Adidas", "nombre" : "Away", "cantidad" : 65, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 20, "S" : 50 } }
{ "_id" : 3, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Run", "cantidad" : 200, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 20, "S" : 30 } }
{ "_id" : 4, "categoria" : "Sudadera", "marca" : "Nike", "nombre" : "Futura", "cantidad" : 150, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 50, "S" : 20 } }
{ "_id" : 7, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Big", "cantidad" : 197, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 25, "S" : 25 } }
{ "_id" : 8, "categoria" : "Polo", "marca" : "Nike", "nombre" : "Outile", "cantidad" : 100, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 50, "S" : 20 } }
*/




//....$gte....//
//....En está consulta queremos sacar los valores mayor igual a 30 en el campo cantidad....//
/*
db.ropa.find( { cantidad: { $gte: 30 } } )
{ "_id" : 1, "categoria" : "Camiseta", "marca" : "Nike", "nombre" : "Academy 18", "cantidad" : 100, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 2, "categoria" : "Sudadera", "marca" : "Adidas", "nombre" : "Away", "cantidad" : 65, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 20, "S" : 50 } }
{ "_id" : 3, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Run", "cantidad" : 200, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 20, "S" : 30 } }
{ "_id" : 4, "categoria" : "Sudadera", "marca" : "Nike", "nombre" : "Futura", "cantidad" : 150, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 50, "S" : 20 } }
{ "_id" : 7, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Big", "cantidad" : 197, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 25, "S" : 25 } }
{ "_id" : 8, "categoria" : "Polo", "marca" : "Nike", "nombre" : "Outile", "cantidad" : 100, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 50, "S" : 20 } }

*/


//....$in....//
//....En está consulta queremos sacar los valores igual a S y M  en el campo talla....//
/*
db.ropa.find( { talla: { $in: [ "S", "M" ] } } )
{ "_id" : 1, "categoria" : "Camiseta", "marca" : "Nike", "nombre" : "Academy 18", "cantidad" : 100, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 2, "categoria" : "Sudadera", "marca" : "Adidas", "nombre" : "Away", "cantidad" : 65, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 20, "S" : 50 } }
{ "_id" : 3, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Run", "cantidad" : 200, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 20, "S" : 30 } }
{ "_id" : 4, "categoria" : "Sudadera", "marca" : "Nike", "nombre" : "Futura", "cantidad" : 150, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 50, "S" : 20 } }
{ "_id" : 5, "categoria" : "Camiseta", "marca" : "Adidas", "nombre" : "Club", "cantidad" : 26, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 6, "categoria" : "Sudadera", "marca" : "Reebok", "nombre" : "Tee", "cantidad" : 18, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 20, "P" : 30, "S" : 50 } }
{ "_id" : 7, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Big", "cantidad" : 197, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 25, "S" : 25 } }
{ "_id" : 8, "categoria" : "Polo", "marca" : "Nike", "nombre" : "Outile", "cantidad" : 100, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 50, "S" : 20 } }
*/



//....$lt....//
//....En está consulta queremos sacar los valores menor a 60 en el campo cantidad....//
/*
db.ropa.find( { cantidad: { $lt: 60 } } )    
{ "_id" : 5, "categoria" : "Camiseta", "marca" : "Adidas", "nombre" : "Club", "cantidad" : 26, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 6, "categoria" : "Sudadera", "marca" : "Reebok", "nombre" : "Tee", "cantidad" : 18, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 20, "P" : 30, "S" : 50 } }
*/



//....$lte....//

//....En está consulta queremos sacar los valores menor o igual a 75 en el campo cantidad....//
/*
db.ropa.find( { cantidad: { $lte: 75 } } )
{ "_id" : 2, "categoria" : "Sudadera", "marca" : "Adidas", "nombre" : "Away", "cantidad" : 65, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 20, "S" : 50 } }
{ "_id" : 5, "categoria" : "Camiseta", "marca" : "Adidas", "nombre" : "Club", "cantidad" : 26, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 6, "categoria" : "Sudadera", "marca" : "Reebok", "nombre" : "Tee", "cantidad" : 18, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 20, "P" : 30, "S" : 50 } }
*/





//....$ne....//
//....En está consulta queremos sacar los valores que no sea 100 en el campo cantidad....//
/*
db.ropa.find( { cantidad: { $ne: 100 } } )
{ "_id" : 2, "categoria" : "Sudadera", "marca" : "Adidas", "nombre" : "Away", "cantidad" : 65, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 20, "S" : 50 } }
{ "_id" : 3, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Run", "cantidad" : 200, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 20, "S" : 30 } }
{ "_id" : 4, "categoria" : "Sudadera", "marca" : "Nike", "nombre" : "Futura", "cantidad" : 150, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 50, "S" : 20 } }
{ "_id" : 5, "categoria" : "Camiseta", "marca" : "Adidas", "nombre" : "Club", "cantidad" : 26, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 6, "categoria" : "Sudadera", "marca" : "Reebok", "nombre" : "Tee", "cantidad" : 18, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 20, "P" : 30, "S" : 50 } }
{ "_id" : 7, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Big", "cantidad" : 197, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 25, "S" : 25 } }

*/




//....$nin....//
//....En está consulta queremos sacar los valores que no sea 100 y 197 en el campo cantidad....//
/*
db.ropa.find( { cantidad: { $nin: [ 197, 100 ] } } )   
{ "_id" : 2, "categoria" : "Sudadera", "marca" : "Adidas", "nombre" : "Away", "cantidad" : 65, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 20, "S" : 50 } }
{ "_id" : 3, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Run", "cantidad" : 200, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 20, "S" : 30 } }
{ "_id" : 4, "categoria" : "Sudadera", "marca" : "Nike", "nombre" : "Futura", "cantidad" : 150, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 50, "S" : 20 } }
{ "_id" : 5, "categoria" : "Camiseta", "marca" : "Adidas", "nombre" : "Club", "cantidad" : 26, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 6, "categoria" : "Sudadera", "marca" : "Reebok", "nombre" : "Tee", "cantidad" : 18, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 20, "P" : 30, "S" : 50 } }
*/





//....$and....//
//....En está consulta queremos sacar los valores que no sea 100  en el campo cantidad y que te lo muestre ....//

/*
db.ropa.find( { $and: [ { cantidad: { $ne: 100 } }, { cantidad: { $exists: true } } ] } )
{ "_id" : 2, "categoria" : "Sudadera", "marca" : "Adidas", "nombre" : "Away", "cantidad" : 65, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 20, "S" : 50 } }
{ "_id" : 3, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Run", "cantidad" : 200, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 20, "S" : 30 } }
{ "_id" : 4, "categoria" : "Sudadera", "marca" : "Nike", "nombre" : "Futura", "cantidad" : 150, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 50, "S" : 20 } }
{ "_id" : 5, "categoria" : "Camiseta", "marca" : "Adidas", "nombre" : "Club", "cantidad" : 26, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 6, "categoria" : "Sudadera", "marca" : "Reebok", "nombre" : "Tee", "cantidad" : 18, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 20, "P" : 30, "S" : 50 } }
{ "_id" : 7, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Big", "cantidad" : 197, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 25, "S" : 25 } }
*/





//....$not....//

//....En está consulta queremos negar el operador $gt y saldra los valores que sea menor a 50  en el campo cantidad....//
/*
db.ropa.find( { cantidad: { $not: { $gt: 50 } } } ) 
{ "_id" : 5, "categoria" : "Camiseta", "marca" : "Adidas", "nombre" : "Club", "cantidad" : 26, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 6, "categoria" : "Sudadera", "marca" : "Reebok", "nombre" : "Tee", "cantidad" : 18, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 20, "P" : 30, "S" : 50 } }
*/
//....En está consulta queremos sacar los valores que no sea igual a nike  en el campo marca....//
/*
db.ropa.find({marca : {$not:{$eq:"Nike"  }} })
{ "_id" : 2, "categoria" : "Sudadera", "marca" : "Adidas", "nombre" : "Away", "cantidad" : 65, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 20, "S" : 50 } }
{ "_id" : 3, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Run", "cantidad" : 200, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 20, "S" : 30 } }
{ "_id" : 5, "categoria" : "Camiseta", "marca" : "Adidas", "nombre" : "Club", "cantidad" : 26, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 6, "categoria" : "Sudadera", "marca" : "Reebok", "nombre" : "Tee", "cantidad" : 18, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 20, "P" : 30, "S" : 50 } }
{ "_id" : 7, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Big", "cantidad" : 197, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 25, "S" : 25 } }
*/




//.....$or....//

//....En está consulta queremos sacar los valores que sea mayor  o igual a 27 en el campo cantidad o si no corresponde, que sea igual al Adidas del campo marca....//
/*
db.ropa.find( { $or: [ { cantidad: { $gte: 27 } }, { marca: "Adidas" } ] } )
{ "_id" : 1, "categoria" : "Camiseta", "marca" : "Nike", "nombre" : "Academy 18", "cantidad" : 100, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 2, "categoria" : "Sudadera", "marca" : "Adidas", "nombre" : "Away", "cantidad" : 65, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 20, "S" : 50 } }
{ "_id" : 3, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Run", "cantidad" : 200, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 20, "S" : 30 } }
{ "_id" : 4, "categoria" : "Sudadera", "marca" : "Nike", "nombre" : "Futura", "cantidad" : 150, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 50, "S" : 20 } }
{ "_id" : 5, "categoria" : "Camiseta", "marca" : "Adidas", "nombre" : "Club", "cantidad" : 26, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 7, "categoria" : "Pantalon", "marca" : "Jordan", "nombre" : "Big", "cantidad" : 197, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 25, "S" : 25 } }
{ "_id" : 8, "categoria" : "Polo", "marca" : "Nike", "nombre" : "Outile", "cantidad" : 100, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 50, "S" : 20 } }
*/





//....$nor....//

//....En está consulta queremos hacer lo contrario a lo anterior sacar los valores que sea menor  o igual a 27 en el campo cantidad o si no corresponde, que no sea igual al Adidas del campo marca....//
/*
db.ropa.find( { $nor: [ { cantidad: { $gte: 27 } }, { marca: "Adidas" } ] } )
{ "_id" : 6, "categoria" : "Sudadera", "marca" : "Reebok", "nombre" : "Tee", "cantidad" : 18, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 20, "P" : 30, "S" : 50 } }
*/




//....$regex....///

//....En está consulta queremos sacar los valores que contenga ik en el campo marca....//
/*
db.ropa.find({marca: {$regex: /ik/} })
{ "_id" : 1, "categoria" : "Camiseta", "marca" : "Nike", "nombre" : "Academy 18", "cantidad" : 100, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 50, "P" : 30, "S" : 20 } }
{ "_id" : 4, "categoria" : "Sudadera", "marca" : "Nike", "nombre" : "Futura", "cantidad" : 150, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 50, "S" : 20 } }
{ "_id" : 8, "categoria" : "Polo", "marca" : "Nike", "nombre" : "Outile", "cantidad" : 100, "talla" : [ "S", "M", "L", "XL" ], "material" : { "A" : 30, "P" : 50, "S" : 20 } }

*/