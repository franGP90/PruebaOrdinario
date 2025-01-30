import { MongoClient } from 'mongodb'
import {} from "./utils.ts"

const url = 'mongodb+srv://fgonzalezp3:fgonzalezp3@kikoc.v6p0n.mongodb.net/?retryWrites=true&w=majority&appName=kikoC';
const client = new MongoClient(url);

//const dbName = '';

await client.connect();
console.log('Connected successfully to server');
/*const db = client.db(dbName);

const Collection = db.collection('');*/

/*const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  const method = req.method;
  const path = url.pathname;

  if (method === "POST" && path === "/") {
   
  }

  if (method === "GET" && path === "/ninos/buenos") {
    
  }

  if (method === "GET" && path === "/ninos/malos") {

  }

  if (method === "GET" && path === "/entregas") {
  
  }

  return new Response("Not found", { status: 404 });
};

Deno.serve({ port: 3000 }, handler);*/