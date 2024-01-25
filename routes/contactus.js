const express = require('express');
const router = express.Router();
import { contactuscontroller } from '../controllers/contactus';
 router.get('contactus',contactuscontroller);
 router.post('/contactus', (req, res) => {
    res.redirect('/');
  });
module.exports = router;