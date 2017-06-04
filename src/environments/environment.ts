// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyBnxxAeOGWMYqd20f3Hlm_n4jhjvSajFYY",
      authDomain: "bloc-chat-15781.firebaseapp.com",
      databaseURL: "https://bloc-chat-15781.firebaseio.com",
      projectId: "bloc-chat-15781",
      storageBucket: "bloc-chat-15781.appspot.com",
      messagingSenderId: "737181856150"
  }
};
