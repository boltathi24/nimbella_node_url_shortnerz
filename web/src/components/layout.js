import React, { Component } from "react";
import axios from 'axios';
 
class Shortner extends Component {
   
  componentDidMount() {
    document.title = 'URL Shortner';
  }
      state = {
        actual_url: null,
        shorten_url_response: null
      };
      constructor(props) {
        super(props);
        this.state = {actual_url: null,
          shorten_url_response: null};
      }

     
    
      handleClick = () => {
        //do something
        this.setState({shorten_url_response: null});
        this.setData()
      }

      setUrl= (e)=> {
        this.setState({actual_url: e.target.value});
        console.log(this.state)
    }

       setData() {
         console.log(this.actual_url)
         
    axios.post("https://pathitha-4mpb1smu66t-apigcp.nimbella.io/api/s/url", {actual_url:this.state.actual_url},{ headers: {'content-type': 'application/json'}})
        .then(response => this.setState({ shorten_url_response: response.data.short_url }));
    }

    
  render() {
    let header
    if (this.state.shorten_url_response) {

      header = <label className="labelclass">Your shortened URL is</label>

    } 
    return (
      <div>
        <textarea  type="text"  className="textboxHeight"onChange={ this.setUrl } placeholder="paste the link to shorten.."/><br></br>
       <input type="button" value="submit" onClick={this.handleClick}></input><br></br><br></br>
       {header}<br></br><br></br>
       <a className="resultTextArea" href={ this.state.shorten_url_response} target="_blank" rel="noopener noreferrer">{ this.state.shorten_url_response}</a>
      </div>
    );
  }
}
 
export default Shortner;
