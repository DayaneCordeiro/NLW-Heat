import { serverHttp } from "./app";

// Application will run on 4000 port
serverHttp.listen(4000, () => console.log(`🚀 Server is running on 4000 PORT`));
