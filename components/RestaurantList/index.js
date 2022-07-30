import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import Link from "next/link"
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
} from "reactstrap"

const QUERY = gql`
  {
    restaurants {
      id
      name
      description
      image {
        url
      }
    }
  }
`

/**
 * RestaurantList関数
 * @param {any} props ﾌﾟﾛｯﾌﾟｽ
 * @return RestaurantListｺﾝﾎﾟｰﾈﾝﾄ
 * @description ReactStrapにてxs=2ｶﾗﾑ, sm=3ｶﾗﾑで行列返却
 */
function RestaurantList(props) {
  const { loading, error, data } = useQuery(QUERY)

  if (error) return "レストランの読み込みに失敗しました"

  if (loading) return <h1>読み込み中..</h1>

  if (data.restaurants && data.restaurants.length) {
    //searchQuery
    const searchQuery = data.restaurants.filter((query) =>
      query.name.toLowerCase().includes(props.search),
    )
    if (searchQuery.length != 0) {
      return (
        <Row>
          {searchQuery.map((res) => (
            <Col xs="6" sm="4" key={res.id}>
              <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
                <CardImg
                  top={true}
                  style={{ height: 250 }}
                  src={`${process.env.NEXT_PUBLIC_API_URL}${res.image[0].url}`}
                />
                <CardBody>
                  <CardTitle>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Link
                    as={`/restaurants/${res.id}`}
                    href={`/restaurants?id=${res.id}`}
                  >
                    <a className="btn btn-primary">もっと見る</a>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}

          <style jsx global>
            {`
              a {
                color: white;
              }
              a:link {
                text-decoration: none;
                color: white;
              }
              a:hover {
                color: white;
              }
              .card-columns {
                column-count: 3;
              }
            `}
          </style>
        </Row>
      )
    } else {
      return <h1>レストランが見つかりませんでした</h1>
    }
  }
  return <h5>レストランを追加してください</h5>
}
export default RestaurantList
