// Enter the Password to login 

// node filename "mail id " "maid id "
let linkToResume = "https://drive.google.com/drive/folders/1Hw621gQG3xaFvZPQt9Tw0Gel6r63WLjJ?usp=sharing";
let jobId="SDE Intern"
let puppeteerExtra=require('puppeteer-extra');
let stealthPlugin  =require('puppeteer-extra-plugin-stealth');
let puppeteer= require('puppeteer');
// let dotenv=  require('dotenv');
let sender="vivekgupta6534294@gmail.com";
// let to="lakhangupta6534294@gmail.com"
let to=process.argv.slice(2);
puppeteerExtra.use(stealthPlugin());
// dotenv.config();
(async function(){
  let browser= await puppeteerExtra.launch({headless: false,  defaultViewport: null,args: ['--start-fullscreen']});
  let page=await browser.newPage();
  await page.goto("https://mail.google.com/");
  await waitandclick('[autocomplete="username"]',page);
  await page.type('[autocomplete="username"]',sender);
  await page.click("#identifierNext");
  await page.waitForTimeout(1500);
  await page.type('[type="password"]', password);
  await page.click("#passwordNext");
  await waitandclick(".T-I.T-I-KE.L3",page);
  // await page.waitFor(7000);
  // await page.keyboard.press('Escape');
  // await page.waitFor(2000);
  //To 
  await page.waitForSelector('[name="to"]');
  await page.click('[name="to"]');
  //Subject   
  for(let i=0;i<to.length;i++){
    await page.type('[name="to"]',to);
    await page.keyboard.press("Enter");
    
  }

  // let abc="Vivek";
  // console.log(`my name is ${abc}`);
  // await page.type('[name="to"]',to);
  //Body 
  await page.type('input[name="subjectbox"]',  "Thank you for visiting us!",{delay:10});
  await page.type('.Am.Al.editable.LW-avf.tS-tW', ` Hi Visitor,

  Thank you so much for taking the time out of your busy schedule to visit our project. We hope you enjoyed our experience and could learn some valuable insights you can implement in future. It was a very wonderful and insightful meeting with you.
  Feel free to share your experience and ideas with your colleagues who may be interested.
  Thanks again for the opportunity. Warm Regards!
  
  Thanks,
  DuoCoders Team`,{delay:10});

//Resume Attach
// const [fileChooser] = await Promise.all([
//   page.waitForFileChooser(),
//   page.click(".a1.aaA.aMZ"),
//   ]);
// await fileChooser.accept(["C:/Users/vivek/Desktop/Resume FInal.pdf"]);



  // Send Button Click
  await page.click(".T-I.J-J5-Ji.aoO.v7.T-I-atl.L3");


  // Rough
            //   await page.click('[name="to"]');
            //   const pages = await browser.pages();
          //   console.log(pages.length);  
            
          //   let len= await page.evaluate( function(page){
          //       let tab=document.querySelectorAll('[name="to"]');
                
          //       tab[0].click();
          //       return tab.length;
          // })
})();
async function waitandclick(selector,page){
    await page.waitForSelector(selector);
    await page.click(selector);
    
}






















































let password="";