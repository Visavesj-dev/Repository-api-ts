import ApiRepository from "./apiRepository";
import GetApi from "./apiController";
// view
(() => {
  const main = new ApiRepository(new GetApi());
  main.getJsonData().then((res) => {
    console.log(res);
  });
})();
