// importing important modules
import { server } from "./http";
import "./websocket";


// choosing port
const PORT = 3000;


// listening port in localhost
server.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});