function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/jeunsol/hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log("액션체크", data);
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/jeunsol/hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log("상품디테일액션체크", data);
    dispatch({ type: "GET_PRODUCT_DETAIL", payload: { data } });
  };
}

export const productAction = { getProducts, getProductDetail };
