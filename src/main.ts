import { MainView } from "./main.view";
import MainController from "./main.controller";
import CommentRepository from "./services/commentRepository";

class Main implements MainView {
  private controller: MainController;

  constructor() {
    this.controller = new MainController(this, new CommentRepository());
  }

  async getDataComment(): Promise<void> {
    await this.controller.getDataCommentData();
  }
}

export default Main;
