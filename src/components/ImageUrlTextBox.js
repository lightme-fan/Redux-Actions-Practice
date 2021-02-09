import React from 'react';
import TextField from '@material-ui/core/TextField';

function ImageUrlTextBox({ set }) {
  return (
      <div>
        <div>Enter URL of image</div>
        <TextField
          type="string"
          label="url"
          // value="https://www.thestatesman.com/wp-content/uploads/2020/04/1c5b1aa3386eeb2c21d633f04e2ddfbe.jpg"
          onChange={(e)=>{
          if(set){
            set(e.target.value);
          }
        }}
        />
      </div>
  );
}
export default ImageUrlTextBox;