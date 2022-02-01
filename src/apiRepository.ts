import ApiController from "./ApiController";

interface ApiRepositoryInterface {
  getJsonDataRepository: () => void;
}

// Repository parttern
// เเยกการ pass ข้อมูลให้อยู่เพียงเเค่ Repository
// use only call api and pass response

class ApiRepository implements ApiRepositoryInterface {
  private jsonDataApi: ApiController;

  constructor(jsonDataApi: ApiController) {
    this.jsonDataApi = jsonDataApi;
  }

  // Method call api in 1 class
  getJsonDataRepository = () => {
    return this.jsonDataApi.getJsonData();
  };
}

export default ApiRepository;
