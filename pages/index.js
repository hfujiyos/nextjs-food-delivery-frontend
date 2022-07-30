import { useState } from "react"
import { Button, Alert, InputGroupText } from "reactstrap"
import { Col, Input, InputGroup, Row } from "reactstrap"
import RestaurantList from "../components/RestaurantList"

/**
 * Homeｺﾝﾎﾟｰﾈﾝﾄ
 * @return {div} Homeｺﾝﾎﾟｰﾈﾝﾄ
 * @description Hooksにてﾛｰｶﾙｽﾃｰﾄ管理
 * @description 検索ｷｰをRestaurantListｺﾝﾎﾟｰﾈﾝﾄへProps渡しして検索
 */
const Home = () => {
  const [query, setQuery] = useState("")
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <div className="search">
            <InputGroup>
              <InputGroupText addonType="append"> 探す </InputGroupText>
              <Input
                placeholder="レストラン名を入力してください"
                onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
                value={query}
              />
            </InputGroup>
          </div>
          <RestaurantList search={query} />
        </Col>
      </Row>
      <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </div>
  )
}

export default Home
