import React, { Component } from 'react';
import styled from 'styled-components';

import FetchAPI from '../utils/fetchAPI';

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

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      accessKey: '',
      secretKey: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { accessKey, secretKey } = this.state; 

    if (!!accessKey && !!secretKey) {
      let fetchAPI = new FetchAPI('buckets', accessKey, secretKey);
      fetchAPI.get().then(res => {
        console.log(res);
      }).catch(e => {
        console.error(e);
        this.setState({errInfo: '登录失败，请重新输入！'});
      });
    } else {
      this.setState({errInfo: '请输入完整信息！'})
    }
  }

  render() {
    return <Section>
      <Img src={require('../../public/logo.png')} />
      <form onSubmit={this.handleSubmit}>
        <InputDiv>
          <label>AccessKey: </label>
          <input 
            type='text'
            value={this.state.accessKey} 
            placeholder={'请输入accessKey'} 
            onChange={(e) => this.setState({accessKey: e.target.value})} />
        </InputDiv>
        <InputDiv>
          <label>SecretKey: </label>
          <input 
            type='password'
            value={this.state.secretKey} 
            placeholder={'请输入secretKey'}
            onChange={(e) => this.setState({secretKey: e.target.value})} />        
        </InputDiv>
        <Warning>{this.state.errInfo ? this.state.errInfo : ' '}</Warning>
        <Button type='submit'>登录</Button>
        <ALink href='#'>忘记密码？</ALink>
      </form>
    </Section>;
  }
}