import MainController from "./main.controller";
import CommentRepository from "./services/comment.repository";
import { CommentDao } from "./services/dao/comment";

export interface MainView {
  getData(): Promise<void>;
  setData(data: CommentDao[]): void;
  setMessageError(message: string): void;
}

class Main implements MainView {
  private controller: MainController;

  constructor() {
    this.controller = new MainController(this, new CommentRepository());
  }

  setData(data: CommentDao[]): void {
    console.log("data: ", data);
  }

  async getData(): Promise<void> {
    await this.controller.getDataCommentData();
  }

  setMessageError(message: string): void {
    console.log("This is Error", message);
  }
}

export default Main;
