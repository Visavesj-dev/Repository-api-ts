import { BaseService } from "./axios";
import { CommentDao } from "./dao/comment";

class CommentRepository extends BaseService {
  constructor() {
    super({
      baseURL: `https://jsonplaceholder.typicode.com`,
    });
  }

  async getJsonData() {
    return this.get<CommentDao[]>("/comments");
  }
}

export default CommentRepository;
