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
    var mock = new MockAdapter(axios);

    const MockData = {
      data: [
        {
          postId: 19,
          id: 94,
          name: "vero repudiandae voluptatem nobis",
          email: "Tatum_Marks@jaylon.name",
        },
      ],
    };

    // mock
    //   .onGet("https://jsonplaceholder.typicode.com/comments")
    //   .reply(200, MockData);

    await main.getDataCommentData();
  });
});
