import MainController from "../main.controller";
import CommentRepository from "../services/commentRepository";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Main from "../main";

describe("Mocks api call", () => {
  let main: any;

  beforeAll(() => {
    main = new MainController(new Main(), new CommentRepository());
  });

  afterAll(() => {
    main = null;
  });

  test("Test Mock getDataCommentData", async () => {
    // AAA

    const MockData = [
      {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
      },
    ];

    await main.getDataCommentData().then((response: any) => {
      expect(response[0].id).toEqual(MockData[0].id);
    });
  });
});
