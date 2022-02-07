import MainController from "./main.controller";
import CommentRepository from "./services/commentRepository";
export interface MainView {
  getDataComment(): Promise<void>;
  setMessageError(message: string): void;
}

class Main implements MainView {
  private controller: MainController;

  constructor() {
    this.controller = new MainController(this, new CommentRepository());
  }

  async getDataComment(): Promise<void> {
    await this.controller.getDataCommentData();
  }

  setMessageError(message: string): void {
    console.log("This is Error", message);
  }
}

export default Main;
