var failures = 0;
var numberOfTests = 0;

function expect(testvalue) {

  var test = document.getElementById("test");
  var errorMessage;

  function toEqual(actualvalue) {
    if(testvalue !== actualvalue) {
      failures++;
      errorMessage = ` - Expected "${testvalue}" to equal "${actualvalue}".`;
      runErrorProcess();
    };
  };

  function toNotEqual(actualvalue) {
    if(testvalue == actualvalue) {
      failures++;
      errorMessage = ` - Expected "${testvalue}" to not equal "${actualvalue}".`;
      runErrorProcess();
    };
  };

  function toContain(actualvalue) {
    if(!testvalue.includes(actualvalue)) {
      failures++;
      errorMessage = ` - Expected ${testvalue} to contain ${actualvalue}.`
      runErrorProcess();
    };
  };

  function toBeDefined() {
    if(testvalue == undefined) {
      failures++;
      errorMessage = ` - Expected ${testvalue} to be defined.`
      runErrorProcess();
    };
  };


  function error(errorMessage) {
    test.innerHTML += `<p class='fail'>${errorMessage}</p>`
  };

  function runErrorProcess() {
    error(errorMessage);
    var list = test.getElementsByTagName("LI")
    list[list.length - 1].className = "fail";
  };

  return {
    toEqual: toEqual,
    toNotEqual: toNotEqual,
    toContain: toContain,
    toBeDefined: toBeDefined
  }

};

function describe(testHeading, func) {
  document
  .getElementById("test")
  .innerHTML += `<h3>${testHeading}</h3>`;
  func();
  testCounter();
};

function it(description, block) {
  numberOfTests++;
  document
  .getElementById("test")
  .innerHTML += `<li>${description}</li>`;
  block();
};

function testCounter() {
  var fails;
  var color;
  failures === 1 ? fails = 'failure' : fails = 'failures';
  failures ? color = 'red' : color = '#00cc00';
  document
  .getElementById("test-report")
  .innerHTML = `<span style="color:${color}">${numberOfTests} tests, ${failures} ${fails}</span>`;
};
