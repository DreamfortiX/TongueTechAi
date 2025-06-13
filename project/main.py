from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import tensorflow as tf
from PIL import Image
import io
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import uvicorn
import shutil
import os


app = FastAPI()

# CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
model = tf.keras.models.load_model(r"E:\xamp\htdocs\fyp\fyp\cancer_model.h5")
print("✅ Model input shape:", model.input_shape)  # This helps confirm correct size

def predict_image(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)
    prediction = model.predict(img_array)[0][0]
    confidence = float(prediction if prediction > 0.5 else 1 - prediction)
    label = "non-cancer" if prediction > 0.5 else "cancer"
    return label, round(confidence * 100, 2)

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    # Save the uploaded image
    file_path = f"temp/{file.filename}"
    os.makedirs("temp", exist_ok=True)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    try:
        label, confidence = predict_image(file_path)
        return {
            "prediction": label,
            "confidence": confidence
        }
    except Exception as e:
        return {"error": str(e)}
    finally:
        os.remove(file_path)

# Uncomment to run directly
# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=8000)