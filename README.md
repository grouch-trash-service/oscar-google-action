# Oscar Google Action
Googe Action that uses the grouch trash service to tell you what day trash pickup will be.
The day for trash changes on certain holidays, This google actions aims to help the user stay up to date on this 
information by making it easily accessible.

## Build
Before running the build make sure you have the necessary tools installed by running
```bash
./init
```
Builds use npm and can be ran using this command.
```bash
npm install
``` 

## Test
### Unit
Unit tests are also ran using npm.
```bash
npm test
```

### Acceptance Tests
Acceptance tests are ran using cucumber. 
The tests can be ran locally using the firebase emulator.
The tests can be ran by using this command.

```bash
./node_modules/firebase-tools/lib/bin/firebase.js emulators:exec "npm run cucumber"
```

To run the tests against the server using this command.

```bash
NODE_ENV=production npm run cucumber
```

## Deploy
Deployments are done through [github actions](.github/workflows/nodejs.yml)

### Deploy from local

#### Dialogflow Deploy
Deployments use the `dialogflow-cli` to deploy to dialog flow. You can deploy from your local using this command.
```bash
dialogflow-cli import --credentials ./credentials.json .
```
Credentials will need to be exported out of the dialogflow console and saved as `./credential.json`

### Firebase functions Deploy
Deployments use the `firebase-tools` library to deploy the intent functions. You can deploy from your local using this command.

```bash
firebase deploy --token "$firebase_token"
```
The firebase token can be found in the firebase console.

## Code Scanning

### Snyk OSS Scanning

OSS dependency scanning is done using Snyk as part of the deployment pipeline and results can be viewed on the github action logs.
You can run a scan locally by running this command.
```bash
snyk monitor --file=functions/package-lock.json --severity-threshold=high
```


### Sonar Scanning

Sonar scans are done as part of the deployment pipeline and results can be viewed on the github action logs.
Results can also be found on [Sonarcloud.](https://sonarcloud.io/dashboard?id=matthew-js-porter_oscar-google-action)
