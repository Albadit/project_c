# Installing Node.js, npm and Next.js

This guide will walk you through the process of installing Node.js, npm (Node Package Manager) and Next.js on your system. These tools are commonly used for developing modern web applications and JavaScript projects.

## Table of Contents
- [Installing Node.js](#installing-nodejs)
- [Installing npm](#installing-npm)
- [Creating a Next.js App](#creating-a-nextjs-app)

## Installing Node.js

Node.js is a runtime environment that allows you to run JavaScript on the server-side, while npm is a package manager used to manage dependencies for your projects.

### Step 1: Download Node.js and npm

1. Visit the official Node.js website: [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS (Long-Term Support) version for your operating system.
3. Run the installer and follow the on-screen instructions.

### Step 2: Verify Installation

To ensure that Node.js and npm are installed correctly, open your terminal or command prompt and run the following commands:

```
node -v
npm -v
```

You should see the versions of Node.js and npm displayed in the terminal. if you don't see the npm version go to [Installing npm](#installing-npm).

## Installing npm

npm stands for "Node Package Manager." It's a tool for managing and sharing code packages in JavaScript projects. npm helps install libraries, manage dependencies, and run scripts. It's a vital part of the JavaScript ecosystem, simplifying development and collaboration.

### Step 1: Install npm

To install npm, you can use npm itself. Open your terminal or command prompt and run:

```
npm install -g npm
```

The -g flag installs npm globally on your system.

### Step 2: Verify Installation

After installing npm, verify it by running:

```
npm -v
```

You should see the npm version displayed in the terminal.

## Creating a Next.js App
Next.js is a popular framework for building React applications with server-side rendering, routing, and other features.

### Step 1: Create a Next.js App
1. Open your terminal or command prompt.
2. Navigate to the directory where you want to create your Next.js app.
3. Run the following command to create a new Next.js app:

```
npx create-next-app@latest
```

On installation, you'll see the following prompts:


1.  What is your project named? <ins>my-next-app</ins>
2.  Would you like to use TypeScript? No / <ins>Yes</ins>
3.  Would you like to use ESLint? No / <ins>Yes</ins>
4.  Would you like to use Tailwind CSS? No/ <ins>Yes</ins> 
5.  Would you like to use `src/` directory? No / <ins>Yes</ins>
6.  Would you like to use App Router? (recommended) No / <ins>Yes</ins>
7.  Would you like to customize the default import alias? No / <ins>Yes</ins>
8.  What import alias would you like configured? @/* <ins>Press enter</ins>

After the prompts, create-next-app will create a folder with your project name and install the required dependencies.

### Good to know:

- Next.js now ships with TypeScript, ESLint, and Tailwind CSS configuration by default.
- You can optionally use a `src` directory in the root of your project to separate your application's code from configuration files.

## Conclusion

By following the steps outlined in this guide, you should now have Node.js, npm, Yarn, and Next.js installed on your system. These tools are essential for modern web development and will help you build powerful and efficient web applications.

Remember to explore the official documentation of each tool to learn more about their capabilities, best practices, and advanced features:

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [npm Documentation](https://docs.npmjs.com/)
- [Yarn Documentation](https://classic.Yarnpkg.com/en/docs)
- [Next.js Documentation](https://nextjs.org/docs)

If you encounter any issues or have questions, feel free to consult online forums, communities, or the documentation specific to each tool.

Happy coding and enjoy building amazing web applications with Node.js, npm, Yarn, and Next.js!
