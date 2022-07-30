import React from "react"
import App from "next/app"
import Head from "next/head" //SEO関連のMeta情報を記述する
import Layout from "../components/Layout"
import withData from "../lib/apollo"

/**
 * MyAppｺﾝﾎﾟｰﾈﾝﾄ
 * @return JSXｺﾝﾎﾟｰﾈﾝﾄ
 * @description 全ｺﾝﾎﾟｰﾈﾝﾄ共通処理（reactstrap/layout/props/apollo）
 */
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default withData(MyApp)
