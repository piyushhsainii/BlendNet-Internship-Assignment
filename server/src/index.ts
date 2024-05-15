import { clients, sessions } from '@clerk/clerk-sdk-node';
import Cookies from 'cookies';

// Note: Clerk stores the clientToken in a cookie
// named "__session" for Firebase compatibility
const cookies = new Cookies(req, res);
const clientToken = cookies.get('__session');

const client = await clients.verifyClient(clientToken);
const sessionId = client.lastActiveSessionId;

const session = await sessions.verifySession(sessionId, clientToken);