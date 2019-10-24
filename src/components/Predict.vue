<template>
  <div class="hello">
    <div class="file-upload-from">
      <input type="file" @change="predictImage" accept="image/*" />
      <div class="image-preview">
        <img :src="imageData" class="preview" />
      </div>
    </div>
  </div>
</template>

<script>
import * as tf from "@tensorflow/tfjs"

export default {
  data () {
    return {
      imageData: ""
    }
  },
  methods: {
    async predictImage (event) {
      const model = await tf.loadLayersModel('');
      console.log(model.summary())
      var input = event.target
      if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = e => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
      // console.log(input.files)
      // const example = tf.fromPixels(this.imageData)
      // const prediction = model.predict(example)
      // console.log(prediction)
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.file-upload-form,
.image-preview {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  padding: 20px;
}
img.preview {
  width: 200px;
  background-color: white;
  border: 1px solid #ddd;
  padding: 5px;
}
</style>
