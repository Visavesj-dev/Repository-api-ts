import MainController from "../main.controller";
import CommentRepository from "../services/comment.repository";
import Main, { MainView } from "../main";
import { mock } from "jest-mock-extended";

jest.mock("../services/comment.repository", () => {
  const mockCallback = jest.fn();
  return {
    CommentRepository: jest.fn().mockImplementation(() => {
      return {
        getJsonData: jest.fn().mockImplementation(() => {
          return mockCallback;
        }),
      };
    }),
  };
});

describe("Mocks api call", () => {
  let controller: MainController;
  let mockView: MainView;
  let mockCommentRepo: CommentRepository;

  beforeAll(() => {
    mockView = mock<MainView>();
    mockCommentRepo = mock<CommentRepository>();
    controller = new MainController(mockView, mockCommentRepo);
  });

  // afterAll(() => {
  //   controller = null;
  // });

  const mockCommentSuccess = (response: any) => {
    (mockCommentRepo.getJsonData as jest.Mock).mockImplementation(() => {
      return Promise.resolve(response)
    })
  }

  const mockCommentFailure = (message: string) => {
    (mockCommentRepo.getJsonData as jest.Mock).mockImplementation(() => {
      return Promise.reject(message)
    })
  }

  test("calls comment api success", async () => {
    const mockData = [
      {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
      },
    ];

    mockCommentSuccess(mockData)
    await controller.getDataCommentData();
    expect(mockView.setData).toHaveBeenCalledWith(mockData)
  });

  test("calls comment api failure", async () => {
    mockCommentFailure("error here");
    await controller.getDataCommentData();
    expect(mockView.setMessageError).toHaveBeenCalledWith("error here");
  });
});
