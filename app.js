const express = require('express');
const path = require('path');
const ejs = require("ejs");
const app = express();

// Serve static files (images, CSS, JavaScript, etc.) from the 'public' directory
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/views', express.static(path.join(__dirname, 'views')));



const indexcon = require('./controllers/index');
const homecon = require('./controllers/home');
const aboutcon = require('./controllers/aboutus');
const requestcon = require('./controllers/request');
const bookingcon = require('./controllers/booking_com');
const room101con = require('./controllers/room101');
const room102con = require('./controllers/room102');
const room103con = require('./controllers/room103');
const room201con = require('./controllers/room201');
const room202con = require('./controllers/room202');
const room203con = require('./controllers/room203');
const room301con = require('./controllers/room301');
const room302con = require('./controllers/room302');
const room303con = require('./controllers/room303');
const room401con = require('./controllers/room401');
const room402con = require('./controllers/room402');
const room403con = require('./controllers/room403');
const room501con = require('./controllers/room501');
const room502con = require('./controllers/room502');
const room503con = require('./controllers/room503');



app.set('view engine', 'ejs')



// Define routes for your HTML pages
app.get('/', indexcon)
app.get('/Home', homecon)
app.get('/About_Us', aboutcon)
app.get('/request', requestcon)
app.get('/Booking_completed', bookingcon)
app.get('/dance_room101', room101con)
app.get('/dance_room102', room102con)
app.get('/dance_room103', room103con)
app.get('/com_room201', room201con)
app.get('/com_room202', room202con)
app.get('/com_room203', room203con)
app.get('/music_room301', room301con)
app.get('/music_room302', room302con)
app.get('/music_room303', room303con)
app.get('/hall_room401', room401con)
app.get('/hall_room402', room402con)
app.get('/hall_room403', room403con)
app.get('/sing_room501', room501con)
app.get('/sing_room502', room502con)
app.get('/sing_room503', room503con)



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
