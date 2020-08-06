const { Router } = require("express");
const router = Router();

const User = require("../models/users");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => res.send("Hola mundo"));

router.post("/register", async (req, res) => {
  const { email, password } = req.body; //se crea el usuario
  const newUser = new User({ email, password });
  try {
    await newUser.save(); // se guarda el usuario
    console.log(newUser);

    const token = jwt.sign({ _id: newUser._id }, "secretkey", {
      expiresIn: 150000000,
    }); //se envia el token al cliente

    res.status(200).json({ 
        created: true,
        token });

    //res.send("Registrado sign up");
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  try {
    if (!user) return res.status(401).send("El correo es inexistente");
    if (user.password !== password) return res.status(401).send("Password incorrecta");

    const token = jwt.sign({ _id: user._id }, "secretkey", {
      expiresIn: 150000000,
    });
    return res.status(200).json({
         login: true,
         token
        });
  
} catch (error) {
    console.log(error);
  }
});

router.get('/tasks', (req, res ) =>{
    res.json([
        {
            _id: 1,
            name: 'Task One',
            description : 'lorem ipsum',
            date: "2020-08-04"
        },
        {
            _id: 2,
            name: 'Task two',
            description : 'lorem ipsum',
            date: "2020-08-04"
        },
        {
            _id: 3,
            name: 'Task three',
            description : 'lorem ipsum',
            date: "2020-08-04"
        },  {
            _id: 4,
            name: 'Task four',
            description : 'lorem ipsum',
            date: "2020-08-04"
        },
       
    ]);
});

router.get('/private-tasks', verifyToken,(req,res)=>{
    res.json([
        {
            _id: 1,
            name: 'Task One',
            description : 'lorem ipsum',
            date: "2020-08-04"
        },
        {
            _id: 2,
            name: 'Task two',
            description : 'lorem ipsum',
            date: "2020-08-04"
        },
        {
            _id: 3,
            name: 'Task three',
            description : 'lorem ipsum',
            date: "2020-08-04"
        },  {
            _id: 4,
            name: 'Task four',
            description : 'lorem ipsum',
            date: "2020-08-04"
        },
       
    ]);
});

router.get('/profile', verifyToken, (req,res)=>{
    res.send(req.userId);
});

function verifyToken(req, res, next){
    // console.log(req.headers.authorization);
     if(!req.headers.authorization){
        return res.status(401).send('No autorizado');
    }
    const token =  req.headers.authorization.split(' ')[1];
    if(token === null){
        return res.status(401).send('No autorizado');
    }

    const payload = jwt.verify(token, 'secretkey');
    console.log(payload);
    req.userId = payload._id;
    next();

}
module.exports = router;
