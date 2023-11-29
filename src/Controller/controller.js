import fs from 'fs'
const path = 'src/asset'
const readWriteFile = async(req,res)=>{
    try {
        let dateTime = new Date().toISOString()
         console.log("date",dateTime)
      let a=  fs.writeFileSync(`${path}/${dateTime}.txt`,dateTime,'utf-8')
      console.log("write",a)
       let content = fs.readFileSync(`${path}/${dateTime}.txt`,'utf-8')
       console.log("read",content)
        res.status(200).send({
            status:200,
            message:"Success",
            dateTime:content
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