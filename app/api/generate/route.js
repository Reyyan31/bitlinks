import clientPromise from "@/lib/mogodb"


export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url")

   // check if the short url exists

   const doc = await collection.findOne({shorturl : body.shorturl})
   if(doc){
    return Response.json({error : true, success: false, message : 'URL already exists'})
   }

const result =  await collection.insertOne({
    url : body.url,
    shorturl : body.shorturl
   })

return Response.json({error : false, success: true, message : 'URL Generated Successfully'})
  }