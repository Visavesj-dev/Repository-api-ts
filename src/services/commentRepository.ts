import Axios from "./axios";

// Controller or Data Access
class CommentRepository {
  http: Axios;

  constructor() {
    this.http = new Axios({
      baseURL: `https://jsonplaceholder.typicode.com`,
    });
  }

  async getJsonData() {
    return this.http.get("/comments");
  }
}

export default CommentRepository;
