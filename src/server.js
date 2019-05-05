import path from 'path';
import express from 'express';
import helmet from 'helmet';
import pretty from 'pretty';

/* eslint-disable no-unused-vars */
import {
  jsxCreateObject,
  recursiveRenderHtml,
} from './templating';
/* eslint-enable */

import {
  Website,
  Splash,
} from './templates/base';

// ENV
const PORT = 5090;
const debug = process.env.NODE_ENV === 'development';

/**
 * Express app
 */

const app = express();

// Helmet
app.use(helmet());

// Public dir
app.use(
  express.static(path.join(__dirname, '../public'))
);

// Routes
app.get('/', indexPage);


app.listen(PORT, () => {
  console.log(`swedev.org running on port ${PORT}!`);
  if (debug) {
    console.log('[[ IN DEBUG MODE ]]');
  }
});

/**
 * Request handlers
 */

function indexPage(req, res) {
  const html = toHtml(
    <Website>
      <Splash />
    </Website>
  );
  return res.send(html);
}

/**
 * Helpers
 */

function toHtml(obj) {
  return pretty(
    `<!DOCTYPE html>${recursiveRenderHtml(obj)}`
  );
}
