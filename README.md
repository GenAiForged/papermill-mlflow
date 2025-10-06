# Handwritten Digit Recognition

This project is a web application that can recognize handwritten digits. It uses a convolutional neural network (CNN) trained on the MNIST dataset to make predictions. The web interface is built with Flask and allows users to draw a digit on a canvas and get a prediction from the model.

## Project Structure

-   `model/`: Contains the model training script.
    -   `train_model.py`: Script to train the CNN model and save it.
-   `webapp/`: Contains the Flask web application.
    -   `app.py`: The main Flask application file.
    -   `templates/`: Contains the HTML templates.
    -   `static/`: Contains the CSS and JavaScript files.
-   `requirements.txt`: A list of the Python dependencies.
-   `.gitignore`: Specifies which files and directories to ignore in version control.

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Create and activate a virtual environment (optional but recommended):**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    pip install tensorflow opencv-python Flask
    ```

## Training the Model

To train the model, run the following command from the root directory of the project:

```bash
python model/train_model.py
```

This will train the CNN on the MNIST dataset and save the trained model as `model/mnist_model.h5`.

## Running the Web Application

To run the Flask web application, execute the following command from the root directory:

```bash
python webapp/app.py
```

The application will be available at `http://127.0.0.1:5000`.

## How to Use the Web Interface

1.  Open your web browser and navigate to `http://127.0.0.1:5000`.
2.  Draw a single digit on the canvas with your mouse.
3.  Click the "Predict" button to get the model's prediction.
4.  Click the "Clear" button to clear the canvas and draw a new digit.