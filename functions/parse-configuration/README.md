### getForwardedVariables.js

Implements and exports by default a function that takes in the content of a configuration file as a string, finds environment variables to be forwarded and returns them as a string, using the following format: "name1=value1,name2=value2,...".

A configuration file sets environment variables using the environment command followed by a list of comma separated variables.

```
environment="X_FORWARDED_MAIL=tirion@google.com,X_FORWARDED_HOME=/home/tirion,language=en"
```

Variables to be forwarded start with the X*FORWARDED* prefix. The resulting string contains variable names without the prefix. For example, "X_FORWARDED_HOME=/home/tirion" get converted to "HOME=/home/tirion".

```
[program:prepare]
command=sudo -HEu tirion /bin/bash -c 'cd /usr/src/app && make prepare'
autorestart=false
environment="X_FORWARDED_MAIL=tirion@google.com,X_FORWARDED_HOME=/home/tirion,language=en"

[program:http_server]
command=sudo -HEu tirion /bin/bash -c 'cd /usr/src/app && make environment'
environment="key5=value5,X_FORWARDED_var3=value,key6=value6"
```

```js
const content = fs.readFileSync('s.conf', 'utf-8');

const result = getForwardedVariables(content);
console.log(result); // => "MAIL=tirion@google.com,HOME=/home/tirion,var3=value"
```
