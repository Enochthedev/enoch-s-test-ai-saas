# SaaS AI platform

This is a repository for Build a SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe 
Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- How to write POST, DELETE, and GET routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle relations between Server and Child components!
- How to reuse layouts
- Folder structure in Next 13 App Router

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com//Enochthedev/enoch-s-test-ai-saas.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |


### How some Concepts Helped

My journey to recreate this project allowed me to gain valuable insights and practical knowledge in several areas:

- **Tailwind Design**: I learned how to use Tailwind CSS to create a visually appealing and responsive user interface.

- **Authentication**: The project includes Clerk Authentication, which supports email, Google, and several other social logins. This knowledge is vital for building secure and user-friendly authentication systems.

- **Form Validation and Error Handling**: I implemented form validation using react-hook-form and error handling with react-toast, enhancing the overall user experience.

- **AI Integration**: The project integrates AI tools for image generation, video generation, conversation generation, and music generation. This experience opened my eyes to the possibilities of AI in web applications.

- **Stripe Subscription**: I got hands-on experience in setting up a Stripe monthly subscription model, a crucial aspect of monetizing web applications.

- **API and Server Development**: I learned how to create POST, DELETE, and GET routes in route handlers (app/api) and fetch data in server-side react components directly from the database, without using a separate API.

- **Layout Reusability and Folder Structure**: The project demonstrated how to efficiently reuse layouts and maintain a structured folder layout in Next.js 13.

### Prerequisites

Before getting started, make sure you have Node.js version 18.x.x installed on your system.

### Cloning the Repository

To begin, clone the repository by running the following command:

```shell
git clone https://github.com/Enochthedev/enoch-s-test-ai-saas
```

### Installing Packages

Next, install the required packages by executing the following command:

```shell
npm i
```

### Setting Up .env File

To ensure the project functions correctly, set up your environment variables in the .env file. Replace the placeholders with your own values:

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setting Up Prisma

If you plan to use a MySQL database, add your database configuration. The example here shows the use of PlanetScale:

```shell
npx prisma db push
```

### Starting the Application

Finally, start the application with the following command:

```shell
npm run dev
```

## Available Commands

The project offers several commands, which you can run using npm:

| Command  | Description                                |
| :------- | :----------------------------------------- |
| `dev`    | Starts a development instance of the app  |

By following these steps and exploring the project,i gained a deeper understanding of modern web development, AI integration, and best practices in creating web applications. My journey in recreating this project has been both educational and inspiring.
