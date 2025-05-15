// src/aws-exports.ts

const awsconfig = {
  Auth: {
    // Région de votre user pool
    region: 'eu-west-3',

    // Pour v5 d'amplify, ces deux clés doivent être au premier niveau sous Auth
    userPoolId: 'eu-west-3_ptH9upn19',
    userPoolWebClientId: '4vfbgahm30kjk72u071n3sj1kf',

    // Facultatif selon votre flow
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  },
};

export default awsconfig;
