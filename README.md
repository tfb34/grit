# todo-list
A personal time and task management web application. Allows user to create 'todos', which mainly consist of a task and due date. Users may also create new projects to better organize their tasks. The default 'today' project will automatically consist of all your tasks due on the current day. No sign up is needed!

## Getting Started

These instructions will get you a copy of the project up and running on your computer for development and testing purposes. The <a href="https://tfb34.github.io/todo-list/">live version</a> is also available.

### Prerequisites

Before you begin, make sure you have the latest version of <a href="https://nodejs.org/en/download/">Node.js</a> installed. This will allow you to use npm and webpack. You will also need a text editor such as Notepad++, Sublime, etc.

### Installing

1. On Github, click on the 'Clone or download' button and copy the URL.
2. Open your terminal, and change the current working directory to the location you want the project to reside in. 
3. Type 'git clone', paste the URL, and hit enter :

```
$ git clone https://github.com/tfb34/todo-list.git
```

4. You should now have a folder called, 'todo-list'. To open the application, inside /dist open index.html with your browser. 

### Development
If you wish to make changes to the javascript files in /src, you must use webpack to bundle the files. This will update the bundle.js file in /dist.

1. Install webpack and webpack-cli :

```
$ npm install webpack webpack-cli --save-dev
```

2. Install babel :

```
$ npm install babel-core babel-loader babel-preset-env --save-dev
```

3. Install date-fns :

```
$ npm install date-fns --save
```

4. Run 'npx webpack' :

```
$ npx webpack
```

## Deployment

<a href="https://tfb34.github.io/todo-list/">Open in browser</a>

## Built With

* [webpack](https://webpack.js.org/) - Module bundler for JavaScript applications
* [date-fns](https://date-fns.org/) - Date Utility library
* [babel](https://babeljs.io/) - JavaScript compiler



