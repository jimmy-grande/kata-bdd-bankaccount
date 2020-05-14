import { Router, Request, Response } from 'express'

const getUserAccount = (request: Request, response: Response): void => {
    response.send("Here is your user account")

}
export default (router:Router): Router => {
    router.get('/', getUserAccount)  
    
    return router
}