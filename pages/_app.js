import React, { Component } from 'react';
import App, { Container } from 'next/app'

import Layout from '../components/Layout';

import { SpaceApiStateWrapper } from '../contexts/spaceapi-state'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <SpaceApiStateWrapper>
          <Layout>
            <Component {...this.props} />
          </Layout>
        </SpaceApiStateWrapper>
      </>
    )
  }

}
