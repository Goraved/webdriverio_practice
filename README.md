# webdriver.io practice
Just a [webdriver.io](https://webdriver.io) tool practice

## How to run
1. Install all dependencies:
`install_webdriverio.sh`;
2. Run tests `npm test`;
3. Open allure report `npm run report`.

## Notes:
Amazing documentation and setup process, BUT! Webdriver.io looks slower than Cypress or Playwright. 
Also, it doesn't work in the `sync` mode, only `async`. That's why you need to always put `async` + `await` to each methods.

It also contains a bug, that you can't use element without defining it to the variable...I spent like hour to figure out dat...

**Will work**
```
const el = await $('button');
el.click();
```

**Won't work**
```
await $('button').click();
```

So, it works, easy and interesting to install and configure, but there are a lot of small details which will be annoying.

### [Video](https://drive.google.com/file/d/1m1f4s7U2LItwzyc2NndVXDQvP5LVSaO7/view?usp=sharing)
