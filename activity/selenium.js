//npm install selenium-webdriver chromedriver

require("chromedriver");
let{email,password}=require("../../credentials.json");
let swd=require("selenium-webdriver");
let browser=new swd.Builder();

//tab
let tab=browser.forBrowser("chrome").build();
let tabWillBeOpenedPromise= tab.get("https://www.hackerrank.com/auth/login");
tabWillBeOpenedPromise
.then(function(){
    //Implicit Timeout
    let findTimeoutP=tab.manage().setTimeouts({
        implicit:10000
    });
    return findTimeoutP;
})

//****************************EMAIL ENTERENCE********************************************/
.then(function(){
    //console.log("Home Page opened");
    //To find an Element
    let inputBoxPromise=tab.findElement(swd.By.css("#input-1"));
    return inputBoxPromise;
})

.then(function(inputBox){
    //enter data
    let inputBoxWillBeFilledP=inputBox.sendKeys(email);
    return inputBoxWillBeFilledP;
})

//****************************PASSWORD ENTERENCE********************************************/
.then(function(){
    //To find an Element
    let passwordBoxPromise=tab.findElement(swd.By.css("#input-2"));
    return passwordBoxPromise;
})

.then(function(passwordBox){
    //enter data
    let passwordBoxWillBeFilledP=passwordBox.sendKeys(password);
    return passwordBoxWillBeFilledP;
})

//****************************LOGGING IN********************************************/
.then(function(){
    //console.log("Home Page opened");
    //To find an Element
    let loginWillSelectedP=tab.findElement(swd.By.css("button[data-analytics='LoginPassword']"));
    return loginWillSelectedP;
})

.then(function(loginBtn){
    //enter data
    let loginWillBeClickedP= loginBtn.click();
    return loginWillBeClickedP;
})
/****************Login SUCCESSFUL*********************/
.then(function(){
    console.log("Data Entered");

})
//******************************OPENING INTERVIEW PREPARATION*************************
.then(function(){
    let IpBtnWillBeFoundP = tab.findElement(swd.By.css("h3[title='Interview Preparation Kit']"));
    return IpBtnWillBeFoundP;
})
.then(function(IpBtn){
    //enter data
    let IpBtnWillBeClickedP= IpBtn.click();
    return IpBtnWillBeClickedP;
})
//******************************OPENING WARMUP CHALLENGES*************************
.then(function(){
    let WcBtnWillBeFoundP = tab.findElement(swd.By.css("a[data-attr1='warmup']"));
    return WcBtnWillBeFoundP;
})
.then(function(WcBtn){
    //enter data
    let WcBtnWillBeClickedP= WcBtn.click();
    return WcBtnWillBeClickedP;
})

/**************************Question 1 Accessing************************************/
.then(function () {
    let urlofQP = tab.getCurrentUrl();
    return urlofQP;
    
})

.then(function (urlofQP) {
    let questionWillBeSolvedPromise = questionSolver();
    return questionWillBeSolvedPromise;
})

//******************************SELECTING EDITOR AND MAKING IT EMPTY*************************
.then(function(){
    let EBtnWillBeFoundP = tab.findElement(swd.By.css("a[data-mprt='5']"));
    return EBtnWillBeFoundP;
})
.then(function(EBtn){
    //enter data
    let EBtnWillBeClickedP= EBtn.click();
    return EBtnWillBeClickedP;
})
/*******************************************************************************/
.catch(function (err) {
    console.log(err);
})

/*****************************QUESTION SOLVER FUNCTION****************************************/
function questionSolver() {
    return new Promise(function (resolve, reject) {
        // logic to solve a question
        let allCBTnWSP = tab.findElements(swd.By.css(".challenge-submit-btn"));
        allCBTnWSP.then(function (cBtnArr) {
            let cBtnWillBeClickedP = cBtnArr[0].click();
            return cBtnWillBeClickedP;
    })

    .then(function () {
        resolve();
    })
    
    .catch(function (err) {
        reject();
    })
})
}

