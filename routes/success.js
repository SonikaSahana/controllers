
const express = require('express');

const router = express.Router();
import { successcontroller } from '../controllers/success';
// /admin/success => GET
router.get('/success', successcontroller )

  module.exports = router;