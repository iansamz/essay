// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};
export const firebaseConfig = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBMV5I9eNd-SB1VcvTqyXL9GQfdzNd7HHY",
    authDomain: "essay-15efe.firebaseapp.com",
    databaseURL: "https://essay-15efe.firebaseio.com",
    projectId: "essay-15efe",
    storageBucket: "essay-15efe.appspot.com",
    messagingSenderId: "986951571223"
  }
    
};

