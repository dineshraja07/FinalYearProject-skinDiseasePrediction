
import colab
import requests
from fastapi import FastAPI, File, UploadFile, HTTPException
import shutil
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from io import BytesIO
from typing import Optional
import io
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your needs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],    
)

@app.get("/predict/image")
def predict_image():
   colab.predict(r'C:\Users\raja-7\FinalYearProject\Python-server\skin_disease.jpg')
   image_path = 'result.png'
   with open(image_path, 'rb') as image_file:
        image_bytes = io.BytesIO(image_file.read())
    # Return the image as a response
   return StreamingResponse(image_bytes, media_type="image/png")


@app.post("/fetch-image")
def upload_image(file: UploadFile = File(...)):
    with open(f"{file.filename}", "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            image_Path1=f"{file.filename}"
            # image_Path1='captured-image.png'
            print("image got from front end")
            image_bytes=colab.predict(image_Path1)
    #         image_path2 = 'result.png'
    # # Open the image file in binary mode
            # with open(image_path2, 'rb') as image_file:
            #  image_bytes = io.BytesIO(image_file.read())
    # Return the image as a response
    return StreamingResponse(image_bytes, media_type="image/png")
    # return "successfully predicted"
    