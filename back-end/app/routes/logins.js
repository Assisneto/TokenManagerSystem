module.exports = (app)=>{
    let connection = app.infra.connectionFactory();
    let bancoFunc = new app.infra.bancoFunc(connection);
    console.log('Listando....')

    app.get("/",(req, res) => {
   
        res.render('home');
   
});
    
    app.post("/cadastra", (req, res,next) => {
        
        let cadastro = req.body;
      
        req.assert('login', 'deve ser preenchido').notEmpty();
        req.assert('senha', 'deve ser preenchida').notEmpty(); 
        let err = req.validationErrors();
        console.log(`erro:${err}`);
        if(err){
            res.format({
                json : () =>{
                    res.status(400).json(err)
                    }
            });
            return;
        }
        bancoFunc.salvar(cadastro,(err,results)=>{
            
            if (err){
                console.log(err);
                }
            });
        });
    app.post("/login",(req,res,next)=>{
            
        let login = req.body;
        req.assert('login', 'deve ser preenchido').notEmpty();
        req.assert('senha', 'deve ser preenchida').notEmpty(); 
        let err = req.validationErrors();
        console.log(`erro:${err}`);
        if(err){
            res.format({
                json : () =>{
                    res.status(400).json(err)
                    }
            });
           
        }else{
            res.format({
                json : () =>{
                res.status(200).json()
                }
            });
        }

       bancoFunc.validar(login,(err,results)=>{
                results.forEach(element => {
                        console.log('a',element['senha']);
                        console.log('b',login['senha']);
        ;               if(element['senha']!=login['senha']){
                            res.format({
                                json : () =>{
                                    res.status(400).json() 
                                }
                            });
                        }else{
                            res.format({
                                json : () =>{
                                    res.status(200).json() 
                                }
                            });
                        }
                    
                });
                
                
    
});
              /*return res.format({
                        json : () => {
                        res.status(200),json(true);*/
           //}
        //});
          // }
            });
            

       // });
    }