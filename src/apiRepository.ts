import GetApi from "./apiController";

// Repository parttern 
// เเยกการ pass ข้อมูลให้อยู่เพียงเเค่ Repository
// use only call api and pass response

class ApiRepository {
  private getAPI: GetApi;

  constructor(getAPI: GetApi) {
    this.getAPI = getAPI;
  }

  // Method call api in 1 class
  getJsonData = () => {
    return this.getAPI.getData();
  };
}

export default ApiRepository;
