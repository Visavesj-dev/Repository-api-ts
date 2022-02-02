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
    await this.repo
      .getJsonData()
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  }
}

export default MainController;
