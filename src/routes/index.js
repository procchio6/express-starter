// @flow
import type { $Request, $Response } from 'express';

const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req: $Request, res: $Response) => {
  res.send({
    health: 'testing',
  });
});

module.exports = router;
