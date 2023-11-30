import fs from 'fs'
import path from 'path';
const ROUTE_CACHE_PATH =path.resolve(path.join(process.cwd(), 'src/asset'));
const readWriteFile = async(req,res)=>{
    try {
        let dateTime = new Date().toISOString()
         console.log("date",dateTime)
        fs.writeFileSync(`${ROUTE_CACHE_PATH}/${dateTime.split(":").join("")}.txt`,dateTime,{
            encoding:'utf-8',
             flag:'w+'
        })
       let content = fs.readFileSync(`${ROUTE_CACHE_PATH}/${dateTime.split(":").join("")}.txt`,'utf-8')
       console.log("read",content)
        res.status(200).send({
            status:200,
            message:"Success",
            DateTime:content
        
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error
        })
    }
}

export default {
    readWriteFile
}