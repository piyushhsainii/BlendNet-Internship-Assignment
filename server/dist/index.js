"use strict";
const Clerk = require('@clerk/clerk-sdk-node/cjs/instance').default;
const clerkClient = Clerk({ secretKey: process.env.CLERK_SECRET_KEY });
clerkClient.sessions
    .getSessionList()
    .then((sessions) => console.log(sessions))
    .catch((error) => console.error(error));
