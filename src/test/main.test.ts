import MainController from "../main.controller";
import CommentRepository from "../services/commentRepository";
import axios, { AxiosResponse } from "axios";
import Main from "../main";

jest.mock("axios", () => jest.fn());

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

  // test("should return comment data", async () => {
  //   const MockData = [
  //     {
  //       postId: 1,
  //       id: 1,
  //       name: "id labore ex et quam laborum",
  //       email: "Eliseo@gardner.biz",
  //       body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
  //     },
  //   ];

  //   //Prepare the response we want to get from axios
  //   const mockedResponse: AxiosResponse = {
  //     data: MockData,
  //     status: 200,
  //     statusText: "OK",
  //     headers: {},
  //     config: {},
  //   };
  //   // Make the mock return the custom axios response
  //   const what = mockedAxios.get.mockResolvedValueOnce(mockedResponse);
  //   console.log(what);
  //   // expect(axios.get).not.toHaveBeenCalled();
  //   // await main.getDataCommentData().then((data: any) => {
  //   //   console.log(data);
  //   // });
  // });

  // test("Test AxiosRequest", async () => {
  //   const MockData = [
  //     {
  //       postId: 1,
  //       id: 1,
  //       name: "id labore ex et quam laborum",
  //       email: "Eliseo@gardner.biz",
  //       body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
  //     },
  //   ];

  //   axios.mockResolvedValueOnce(MockData);
  //   const mock = await main.getDataCommentData();

  //   console.log(mock);
  //   // expect(mock).toEqual(MockData);
  //   // expect(axios).toHaveBeenCalledTimes(1);
  // });
});
