import app from "./app.js";

import { connectDB } from "./config/database.js";

connectDB();

app.listen(8000, () => {
    console.log(`server is working on port : 8000`)
})