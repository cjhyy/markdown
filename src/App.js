import React, { Component } from 'react';
import {Layout ,Button,Menu ,BackTop ,Icon} from 'antd';
import marked from 'marked'
import './App.css';
const {
  Header, Footer, Content,
} = Layout;
class App extends Component {
  state={
    fullscreen:false,
    previewContent:null,
    content:null,
  }
  
  onContentChange=(e)=> {
    this.setState({
      content:e.target.innerText,
      previewContent:marked(e.target.innerText, {breaks: true})
    })
  }
  fullChange =() =>{
    setTimeout(
      ()=>this.aa.innerHTML=content,50
    )
    const {fullscreen,content}=this.state
    const aa=!fullscreen
      this.setState({
        fullscreen:aa,
      })
     
  }
  render() {
    const {fullscreen,previewContent,content}=this.state
   
    
    var full;
    if (fullscreen) {
      
    
      full=<Icon className="icon fr" type="fullscreen-exit"  onClick={this.fullChange} />
    } else{
    
      full =<Icon className="icon fr" type="fullscreen" onClick={this.fullChange} />
    }
   
    if (fullscreen){
      return (
        <Layout>
     
          <Content className="aa"> 
           <div className="contents" >
           <div className="tools">
            <Icon className="icon" type="delete"  />
            <Icon className="icon table" type="table" />
            {full}
            </div>

            <div className="container fl" contentEditable="plaintext-only" onInput={this.onContentChange}  ref={input =>this.aa=input}>
            
            </div>
            <div className="container fl" dangerouslySetInnerHTML={{__html: previewContent}} >
 
            </div> </div>
          </Content>
    
     </Layout> 
      )
    }
    return (
     <Layout>
          <Header className="head"><p className="title">在线Markdown编辑器</p></Header>
          <Content className="aas"> 
            <div className="content">
           <div className="tool">
            <Icon className="icon" type="delete" />
            <Icon className="icon table" type="table" />
            {full}
            </div>

            <div className="container fl" contentEditable="plaintext-only" onInput={this.onContentChange} ref={input =>this.aa=input}>
          
            </div>
            <div className="container fl" dangerouslySetInnerHTML={{__html: previewContent}} >
 
            </div></div>
          </Content>
     
     </Layout> 
    );
  }
}

export default App;
