<template>
    <div class="hello">
        <div class="file-upload-from">
            <input type="file" @change="predictImage" accept="image/*" />
            <div class="image-preview">
                <img :src="imageData" class="preview">
            </div>
        </div>
    </div>
</template>

<script>
/* import * as tf from "@tensorflow/tfjs"
const model = await tf.loadLayersModel('../keras/Model Json/model.json') */ 

export default {
    data() {
        return {
            imageData: ""
        }
    },
    methods: {
        predictImage(event) {
            // Reference to the DOM input element
            var input = event.target
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader()
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = e => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0])
            }
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
.file-upload-form, .image-preview {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 20px;
}
img.preview {
    width: 200px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
}

</style>
