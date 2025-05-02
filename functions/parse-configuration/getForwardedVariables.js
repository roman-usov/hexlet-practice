// @ts-check
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, '__fixtures__', filename);
const readFixture = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

// BEGIN (write your solution here)
const content1 = readFixture('s2.conf');
console.log(content1);

const getForwardedVariables = (configString) => {
  const envRegExp = /(?<=environment=").*?"/gm;
  const forwardedVariablesRegExp = /(?<=X_FORWARDED_)(.*?,|.*?$)/g;

  const environmentVariables = [...configString.matchAll(envRegExp)]
    .map((result) => result[0].slice(0, -1))
    .join(',');

  const forwardedVariables = [
    ...environmentVariables.matchAll(forwardedVariablesRegExp),
  ].map((result) => result[0].slice(0, -1));

  return forwardedVariables.join(',');
};

// const getForwardedVariables = (configString) => {
//   const allEnvVariables = configString
//     .split('environment')
//     .filter((str) => str.startsWith('="'))
//     .map((str) => str.slice(2))
//     .map((str) => str.split('"')[0]);
//
//   const forwardedEnvVariables = allEnvVariables
//     .flatMap((el) => el.split(','))
//     .filter((el) => el.includes('X_FORWARDED_'))
//     .map((str) => str.slice(12));
//
//   return forwardedEnvVariables.join(',');
// };

console.log(getForwardedVariables(content1));

export default getForwardedVariables;
// END
