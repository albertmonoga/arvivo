import { myDecisions } from '../tokens.js';

import * as fs from 'fs';

const transformTokens = (parentKey, object) => {
  const objectKeys = Object.keys(object);

  return objectKeys.reduce((tokensTransformed, objectKey) => {
    const value = object[objectKey];

    if (typeof value === 'object') {
      if (parentKey === null)
        return `${tokensTransformed}\t${transformTokens(objectKey, value)}`;

      return `${tokensTransformed}\t${transformTokens(
        `${parentKey}-${objectKey}`,
        value
      )}`;
    }

    return `${tokensTransformed}\n\t--${parentKey}-${objectKey}: ${value};`;
  }, '');
};

if (!fs.existsSync('./src/styles')) {
  fs.mkdirSync('./src/styles');
}

const data = `:root {\n\t${transformTokens(null, myDecisions).trim()}\n}`;
if (!fs.existsSync('./src/styles/main.css')) {
  fs.writeFile('./src/styles/main.css', data, 'utf8', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File written successfully');
    }
  });
}
