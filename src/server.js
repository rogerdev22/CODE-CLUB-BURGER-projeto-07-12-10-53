//const app = require("./app");
import app  from "./app"
import mainRoutes from "./routes"

app.listen(3000) 

app.use(mainRoutes)

