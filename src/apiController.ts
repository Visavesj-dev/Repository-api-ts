import Axios from "./axios";

export interface ApiControllerInterface {
  getJsonData: () => void;
}

// Controller or Data Access
class ApiController implements ApiControllerInterface {
  http: Axios;

  constructor() {
    this.http = new Axios({
      baseURL: `https://jsonplaceholder.typicode.com`,
    });
  }

  getJsonData = () => {
    return this.http.get("/comments");
  };
}

export default ApiController;
