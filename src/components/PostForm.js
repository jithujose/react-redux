import React, {Component} from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <pre style={{color: 'red'}}>23:14</pre>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label><br/>
            <input name="title" type="text" value={this.state.title} onChange={this.onChange}/>
          </div>
          <br/>
          <div>
            <label>Body</label><br/>
            <textarea name="body" id="" cols="30" rows="10" value={this.state.body} onChange={this.onChange}/>
          </div>
          <br/>
          <button type="submit">Submit</button>

        </form>
      </div>
    )
  }
}

export default PostForm