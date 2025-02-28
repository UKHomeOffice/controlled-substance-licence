'use strict';

const { existsSync } = require('fs');
const path = require('path');
const download = exports;

download.responseFile = async (basePath, fileName, res) => {
  const fullFileName = path.join(basePath, fileName);
  const baseDir = path.resolve(__dirname, '..');
  const directory = path.join(baseDir, fullFileName);

  if (existsSync(directory)) {
    const filename = path.basename(fullFileName);

    res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-Transfer-Encoding', 'binary');
    res.setHeader('Content-Type', 'application/octet-stream');

    res.sendFile(directory);
  } else {
    res.sendStatus(404);
  }
};
