## Still in development! - see TODO for progress

# Accounts System

---

<b>Accounts System is a backend focused website with basic frontend, that allows you to create your own accounts, log into it, look up users and delete them if authorized, all using custom API endpoints and UI</b>

## Technologies used:

    1. NextJs
    2. Tailwind
    3. Prisma with postgres
    4. NextJs APIs

## What have I already or will have learned with this project?

- Custom validation
- Tailwind frontend
- Responsive design
- Creating custom API endpoints with Auth
- Documenting API
- NextJs routes

## Run locally

1. <b>Set up Database</b>

   1. Create postgresql db
   2. `.env`
      `DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"`
   3. `Run` `npx prisma migrate dev --name init`
   4. `Install` `npm install @prisma/client`

2. <b>Deploy on your workspace</b>
   1. Clone the code
      `git clone https://github.com/MaxamatO/Accounts-system.git`
      `cd my-project`
   2. Set DATABASE_URL inside .env if not already done
   3. Install dependence
      `npm install .`
   4. Start the app
      `npm run dev`

<h2>Congrats</h2>
    Now navigate to <a>http://localhost:3000</a> in your browser
