import { HttpLink } from "apollo-link-http"
import { withData } from "next-apollo"

/**
 * API_URL
 * @description 本番環境は環境変数を使用、開発環境はlocalhostを使用
 */
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

/**
 * config
 * @description PlaygroundのURL定義（NextApolloのwithDataでｴｸｽﾎﾟｰﾄ）
 */
const config = {
  link: new HttpLink({
    uri: `${API_URL}/graphql`, // Server URL (must be absolute)
  }),
}
export default withData(config)
