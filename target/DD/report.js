$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava/ cucumberJava.feature');
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login functionality exists",
  "description": "",
  "id": "cucumberjava;login-functionality-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login button should exits",
  "keyword": "Then "
});
formatter.match({
  "location": "annotation.openBrowser()"
});
formatter.result({
  "duration": 2694119610,
  "status": "passed"
});
formatter.match({
  "location": "annotation.goToFacebook()"
});
formatter.result({
  "duration": 2355374318,
  "status": "passed"
});
formatter.match({
  "location": "annotation.loginButton()"
});
formatter.result({
  "duration": 42539019,
  "status": "passed"
});
});