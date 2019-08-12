import React from 'react'
const style2 = {
  color:'white'
}
export default function SubmitComment() {
  return (
    <div>
      <div className='container-fluid'>
        <textarea name="textarea" onChange={this.handleChange} value={this.state.textarea} style={style2}></textarea>
        <button onClick={this.sendComment(this.state.cardClickId)} className="btn btn-success form-block">Submit Comment</button>
      </div>
    </div>
  )
}
