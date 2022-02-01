import ApiRepository from "./apiRepository";
import ApiController from "./ApiController";
// view
(() => {
  const main = new ApiRepository(new ApiController());

  main.getJsonDataRepository().then((res) => {
    console.log(res);
  });
})();
