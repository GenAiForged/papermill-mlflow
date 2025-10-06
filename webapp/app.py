from flask import Flask, render_template, request, jsonify
import numpy as np
import tensorflow as tf
import base64
import cv2

app = Flask(__name__)

# Load the trained model
model = tf.keras.models.load_model('model/mnist_model.h5')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get the image from the request
    img_data = request.json['image']
    img_data = base64.b64decode(img_data.split(',')[1])

    # Preprocess the image
    nparr = np.frombuffer(img_data, np.uint8)
    img = cv2.imdecode(nparr, cv2.IMREAD_GRAYSCALE)
    img = cv2.resize(img, (28, 28))
    img = img.reshape(1, 28, 28, 1).astype('float32') / 255.0

    # Make a prediction
    prediction = model.predict(img)
    digit = np.argmax(prediction)

    return jsonify({'digit': int(digit)})

if __name__ == '__main__':
    app.run(debug=True)