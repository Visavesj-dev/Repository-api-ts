import { MainView } from "./main";
import CommentRepository from "./services/comment.repository";

class MainController {
  private view: MainView;
  private repo: CommentRepository;

  constructor(view: MainView, repo: CommentRepository) {
    this.view = view;
    this.repo = repo;
  }

  async getDataCommentData() {
    try {
      const data = (await this.repo.getJsonData());
      this.view.setData(data)
    } catch (err: any) {
      this.view.setMessageError(err);
    }
  }
}

export default MainController;
