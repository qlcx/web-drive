import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import FetchAPI from '../utils/fetchAPI';

// S_XuRfPOCR6q9p4krjb6ut091f2FfF-ZYQIt9ysT
// qZbAy5S86gWxuKDhVioD_zEO36DqznCgy5gXDsjw

const Img = styled.img`width: 9.4rem; margin: 7rem 0 3rem 0`;
const Warning = styled.span`position: absolute; font-size: 1.4rem; color: red; margin-top: .8em;`;
const Section = styled.section`
  width: 100vw; height: 100vh;
  display: flex; flex-direction: column;
  align-items: center;
  background-color: #fff;
  font-size: 14px;
`;
const InputDiv = styled.div`
  padding: 2em 0 0 0;
  width: 80vw;
  label { display: inline-block; width: 35%;};
  input { 
    border: 1.5px solid #E0E0E0;
    border-radius: 4px;
    padding: .4em .5em; 
  }
  input::-webkit-input-placeholder {
    color: #BDBDBD;
  }
`;
const Button = styled.button`
  display: block; width: 100%; font-size: 1.4rem; color: #fff;
  border-radius: 2px;
  box-shadow: -1px 1px 5px #01579B;
  padding: .6em 1em; margin-top: 2.5em;
  background-color: #039BE5;
`;
const ALink = styled.a`
  display: block; width: 100%; text-align: end;
  font-size: 1.3rem; color: #039BE5;
  margin-top: 2em;
`;

@inject(stores => ({
  accessKey: stores.LoginMobx.accessKey,
  secretKey: stores.LoginMobx.secretKey,
  errInfo: stores.LoginMobx.errInfo,
  loginSta: stores.LoginMobx.loginSta,
  buckets: stores.LoginMobx.buckets,

  login: stores.LoginMobx.login,
  setAccessKey: stores.LoginMobx.setAccessKey,
  setSecretKey: stores.LoginMobx.setSecretKey,
}))
@observer
export default class Login extends Component {
  render() {
    const { accessKey, secretKey, errInfo } = this.props;
    const { setAccessKey, setSecretKey, login } = this.props;

    return <Section>
      <Img src={require('../../public/logo.png')} />
      <form onSubmit={e => {e.preventDefault(); login();} }>
        <InputDiv>
          <label>AccessKey: </label>
          <input 
            type='text'
            value={accessKey} 
            placeholder={'请输入accessKey'} 
            onChange={e => setAccessKey(e.target.value)} />
        </InputDiv>
        <InputDiv>
          <label>SecretKey: </label>
          <input 
            type='password'
            value={secretKey} 
            placeholder={'请输入secretKey'}
            onChange={e => setSecretKey(e.target.value)} />        
        </InputDiv>
        <Warning>{errInfo ? errInfo : ''}</Warning>
        <Button type='submit'>登录</Button>
        <ALink href='#'>忘记密码？</ALink>
      </form>
    </Section>;
  }
}