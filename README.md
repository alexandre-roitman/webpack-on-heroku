## Prerequisite:
- [Heroku](https://www.heroku.com/) user.
- [Heroku Toolbelt](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) installed.

## Installation Guide:
- Fork / Clone the project
```bash
git clone git@github.com:akaspi/webpack-on-heroku.git
cd webpack-on-heroku
npm i
```

- Login to Heroku:
```bash
heroku login
```

- Create an Heroku application:
```bash
heroku create
```

- Deploy the app:
```bash
git push heroku master
```

<br>

<b>Inspired by [Ditrospecta](http://ditrospecta.com/javascript/react/es6/webpack/heroku/2015/08/08/deploying-react-webpack-heroku.html) and [Heroku: Getting Stared With Node](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).</b>
