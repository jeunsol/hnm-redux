import React, { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  let { id } = useParams();
  const product = useSelector((state) => state.product.selectedItem);

  const dispatch = useDispatch();

  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };

  const ItemSizeClick = (item, index) => {
    console.log(`클릭된 사이즈 ${index}: ${item}`);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="product-img">
          <img src={product?.img} />
        </Col>
        <Col xs={12} md={6}>
          <div className="product-info">{product?.title}</div>
          <div className="product-info">₩ {product?.price}</div>

          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((item, index) => (
                  <Dropdown.Item key={index} href="#/action-1" onClick={() => ItemSizeClick(item, index)}>
                    {item}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>

          <Button className="add-button" variant="outline-secondary">
            장바구니 추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
