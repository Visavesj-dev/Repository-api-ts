import Axios from "./axios";

// Controller or Data Access
class GetApi {
  http: Axios;

  constructor() {
    this.http = new Axios({
      baseURL: `https://jsonplaceholder.typicode.com`,
    });
  }

  getData = () => {
    return this.http.get("/comments");
  };
}

export default GetApi;
