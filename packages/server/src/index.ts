import * as httpServer from './infrastructure/express'
import * as routers from './routers'

httpServer.start()
httpServer.registerRouter('/account', routers.account(httpServer.createRouter()))