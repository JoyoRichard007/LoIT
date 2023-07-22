const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2'); 


const app = express();

app.use(cors());
app.use(bodyparser.json());

//Connexion à la base de données
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'loi',
    port:3306
});


// check base de données
db.connect(err=>{
    if (err) {console.log(err, 'dberr');}
    console.log('database connected');
})

//obtenir les données
app.get('/utilisateur', (req,res)=>{
    let qr = 'select * from utilisateur';
    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log('====================================');
            console.log(err, 'errs');
            console.log('====================================');
        }
        if (result.length>0)
        {
            res.send({
                message: 'Toutes les données des utilisateurs',
                data:result
            })
        }
    })
})
// ===================
app.get('/article', (req,res)=>{
    let qr = 'select * from article';
    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log('====================================');
            console.log(err, 'errs');
            console.log('====================================');
        }
        if (result.length>0)
        {
            res.send({
                message: 'Toutes les données des articles',
                data:result
            })
        }
    })
})


//====================
// //===================
// app.get('/titre', (req,res)=>{
//     let qr = 'select * from titre';
//     db.query(qr,(err,result)=>{
//         if(err)
//         {
//             console.log('====================================');
//             console.log(err, 'errs');
//             console.log('====================================');
//         }
//         if (result.length>0)
//         {
//             res.send({
//                 message: 'Toutes les données des titres',
//                 data:result
//             })
//         }
//     })
// })


// //====================
// //===================
// app.get('/titre', (req,res)=>{
//     let qr = 'select * from thematique';
//     db.query(qr,(err,result)=>{
//         if(err)
//         {
//             console.log('====================================');
//             console.log(err, 'errs');
//             console.log('====================================');
//         }
//         if (result.length>0)
//         {
//             res.send({
//                 message: 'Toutes les données du thématiques',
//                 data:result
//             })
//         }
//     })
// })


// //====================
// //===================
// app.get('/titre', (req,res)=>{
//     let qr = 'select * from type';
//     db.query(qr,(err,result)=>{
//         if(err)
//         {
//             console.log('====================================');
//             console.log(err, 'errs');
//             console.log('====================================');
//         }
//         if (result.length>0)
//         {
//             res.send({
//                 message: 'Toutes les données des types',
//                 data:result
//             })
//         }
//     })
// })


// //====================
// //===================
// app.get('/titre', (req,res)=>{
//     let qr = 'select * from specifique';
//     db.query(qr,(err,result)=>{
//         if(err)
//         {
//             console.log('====================================');
//             console.log(err, 'errs');
//             console.log('====================================');
//         }
//         if (result.length>0)
//         {
//             res.send({
//                 message: 'Toutes les données des spécifiques',
//                 data:result
//             })
//         }
//     })
// })


//====================
// obtenir un seul données
app.get('/utilisateur/:id', (req,res)=>{

    let gID = req.params.id;

    let qr = `select * from utilisateur where id = ${gID}`;

    db.query(qr, (err, result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0)
        {
            res.send({
                message:'get single data',
                data:result
            });
        }
        else {
            res.send({
                message:'data not found'
            });
        }
    })
});

//----------------
app.get('/article/:id', (req,res)=>{

    let gID = req.params.id;

    let qr = `select * from article where id = ${gID}`;

    db.query(qr, (err, result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0)
        {
            res.send({
                message:'get single data',
                data:result
            });
        }
        else {
            res.send({
                message:'data not found'
            });
        }
    })
});
//-----------


//créer data
// app.post('/utilisateur', (req, res)=>{
//     console.log(req.body, 'createdata');

//     let nom = req.body.nom;
//     let prenom = req.body.prenom;
//     let fonction = req.body.fonction;
//     let username = req.body.username;
//     let mdp = req.body.mdp;

//     let qr = 'insert into utilisateur(nom, prenom, fonction, username,mdp)'
//                 values('$(nom)', '$(prenom)', '$(fonction)', '$(username)', '$(mdp)');

// console.log(qr, 'qr')
//     db.query(qr, (err, result)=>{
//         if(err){console.log(err);}
//         console.log(result, 'result')
//         res.send({
//             message: 'data inséré'
//         });
//     });
// })
//------------------------------------

app.post('/article', (req, res)=>{
    console.log(req.body, 'createData');

    
    
    let titre = req.body.titre;
    let thematique = req.body.thematique;
    let type = req.body.type;
    let section = req.body.section;
    let soussection = req.body.soussection;
    let chapitre = req.body.chapitre;
    let intitule = req.body.intitule;
    let fr = req.body.fr;
    let mg = req.body.mg;
    let specifique = req.body.specifique;
    let signature = req.body.signature;
    
    

    let qr = `insert into article(titre, thematique, type, section, soussection, chapitre, intitule, fr, mg, specifique, signature)
                values("${titre}", "${thematique}", "${type}", "${section}"," ${soussection}", "${chapitre}", "${intitule}", "${fr}", "${mg}", "${specifique}", "${signature}")`;

console.log(qr, 'qr')
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        console.log(result,'result')
        res.send({
            message: 'data insérée',
        });
    });
})


//--------------------------------------


// app.post('/article', (req, res)=> {
//     console.log(req.body, 'createData');

//     let titre = req.body.titre;
//     let fr = req.body.fr;
//     let mg = req.body.mg;

//     let qr = `insert into user(titre, fr, mg) 
//     values('${titre}','${fr}','${mg}') `;

// });

//----------------------------------
//Update data
app.put('/article/:id', (req,res)=>{

    console.log(req.body, 'updatedata');
    let gID = req.params.id;
    let titre = req.body.titre;
    let thematique = req.body.thematique;
    let type = req.body.type;
    let section = req.body.section;
    let soussection = req.body.soussection;
    let chapitre = req.body.chapitre;
    let intitule = req.body.intitule;
    let fr = req.body.fr;
    let mg = req.body.mg;
    let specifique = req.body.specifique;
    let signature = req.body.signature;

    let qr = `update article set titre = "${titre}", thematique = "${thematique}", type = "${type}", section = "${section}", soussection = "${soussection}", chapitre = "${chapitre}", intitule = "${intitule}", fr = "${fr}", mg = "${mg}", specifique = "${specifique}", signature = "${signature}" where id = ${gID}`;

    db.query(qr, (err, result)=>{
        if(err){
            console.log(err);
        }
        res.send({
            message:'données mises à jour'
        });
    });
});

//----------------

app.put('/utilisateur/:id', (req,res)=>{

    console.log(req.body, 'updatedata');
    let gID = req.params.id;
    let nom = req.body.nom;
    let prenom = req.body.prenom;
    let fonction = req.body.fonction;
    let username = req.body.username;
    let mdp = req.body.mdp;

    let qr = `update utilisateur set nom = '${nom}',  prenom = '${prenom}', fonction = '${fonction}', username = '${username}',mdp = '${mdp}' where id = ${gID}`;

    db.query(qr, (err, result)=>{
        if(err){
            console.log(err);
        }
        res.send({
            message:'données mises à jour'
        })
    })
});


//-------------------

// Delete
app.delete('/utilisateur/:id', (req,res)=>{
    let qID = req.params.id;

    let qr = `delete from utilisateur where id = '${qID}' `;
    db.query(qr, (err, result)=>{
        if(err){console.log(err);}
        res.send(
            {
                message: 'données effacées'
            }
        )
    })
})


//------------------
app.delete('/article/:id', (req,res)=>{
    let qID = req.params.id;

    let qr = `delete from article where id = '${qID}' `;
    db.query(qr, (err, result)=>{
        if(err){console.log(err);}
        res.send(
            {
                message: 'données effacées'
            }
        )
    })
})


//---------------------




app.listen(4000,()=>{
    console.log('====================================');
    console.log('service running');
    console.log('====================================');
})
