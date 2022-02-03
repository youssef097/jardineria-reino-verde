// const ejs = require("ejs")
const express = require("express")
const nodemailer = require('nodemailer');
const app = express();


app.set("port", process.env.PORT || 3000)

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
    res.render("pages/index")
})
app.post("/send-email", (req, res) => {
    console.log(req.body);
    // Definimos el transporter
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'jardineriareinoverde@gmail.com',
            pass: 'LNFaNb0O@RzF'
        }
    });
    // Definimos el email
    var mailOptions = {
        from: "jardineriareinoverde@gmail.com",
        to: 'jardineriareinoverde@gmail.com',
        subject: 'Nueva Solicitud de Presupuesto: De ' + req.body.fullName,
        html: ` 
        De <b>${req.body.email }  </b>  <br>   <br>
        ${req.body.description}<br><br>
        Telefono de contacto <b>${req.body.phone}</b><br>
        `.replace('\n',"<br>")
    };

    // Enviamos el email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.render("pages/index")
            console.log(error)
            res.send(500, error.message);
        } else {            
            res.render("pages/index")
        }
        console.log(info);
    });
})

app.set("view engine", "ejs")


// email sender function
//LNFaNb0O@RzF

app.listen(app.get("port"), () => {
    console.log("Hello");
})