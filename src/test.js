const puppeteer = require('puppeteer');


(async () => {
	let urlGPU = "https://www.enterkomputer.com/search/data?q=rtx+3060";
	
	let browser = await puppeteer.launch({ headless: false });
	let page = await browser.newPage();
	await page.goto(urlGPU);
    
    let price = await page.waitForSelector("#product_placeholder+ .media-hr .mr-2");
    let values = await price.evaluate(el => el.textContent);
    console.log(values)
    
	await browser.close();	
})();
