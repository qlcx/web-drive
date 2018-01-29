import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100vw; height: 100vh;
  display: flex; flex-direction: column;
  align-items: center;
  background-color: #fff;
  font-size: 14px;
`;
const Img = styled.img`width: 6.4rem; margin: 3rem 0`;
const InputDiv = styled.div``;

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
        <button type='submit'>登录</button>
      </form>
    </Section>;
  }
}