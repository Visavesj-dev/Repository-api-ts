import { MainView } from "./main.view";
import CommentRepository from "./services/commentRepository";

class MainController {
  private view: MainView;
  private repo: CommentRepository;

  constructor(view: MainView, repo: CommentRepository) {
    this.view = view;
    this.repo = repo;
  }

  async getDataCommentData() {
    const data = await this.repo.getJsonData();
    return data;
  }
}

export default MainController;
