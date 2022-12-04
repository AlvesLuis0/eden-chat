import { server } from "./http";
import "./websocket";


const PORT = 3000;


server.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});