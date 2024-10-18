import { handleGetProduct } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

export const handleSearchProductByName = () =>{
    const inputHeader = document.getElementById("inputHeader");
    const products = handleGetProduct();

    const result = products.filter((el) =>
        el.nombre.toLowerCase().includes(inputHeader.value)
      );
      handleRenderList(result); 

}