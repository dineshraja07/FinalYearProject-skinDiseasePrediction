
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
   colab.predict(r'C:\Users\raja-7\FinalYearProject\Python-server\skin_disease.jpg',r'C:\Users\raja-7\Downloads\best.pt')
   image_path = 'result.png'
   with open(image_path, 'rb') as image_file:
        image_bytes = io.BytesIO(image_file.read())
    # Return the image as a response
   return StreamingResponse(image_bytes, media_type="image/png")


@app.post("/predict/Melonoma")
async def upload_image(file: UploadFile = File(...)):
     try:
        with open(f"{file.filename}", "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        image_Path1 = f"{file.filename}"
        print("Path of the input file:", image_Path1)
        image_bytes = colab.predict(file.filename,r'C:\Users\raja-7\Downloads\Melonoma2.pt')
        return StreamingResponse(io.BytesIO(image_bytes.read()), media_type="image/png")
     except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/predict/Psoriasis")
async def upload_image(file: UploadFile = File(...)):
     try:
        with open(f"{file.filename}", "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        image_Path1 = f"{file.filename}"
        print("Path of the input file:", image_Path1)
        image_bytes = colab.predict(file.filename,r'C:\Users\raja-7\Downloads\Psoriasis.pt')
        return StreamingResponse(io.BytesIO(image_bytes.read()), media_type="image/png")
     except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
     

@app.post("/predict/Melasma")
async def upload_image(file: UploadFile = File(...)):
     try:
        with open(f"{file.filename}", "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        image_Path1 = f"{file.filename}"
        print("Path of the input file:", image_Path1)
        image_bytes = colab.predict(file.filename,r'C:\Users\raja-7\Downloads\Melasma.pt')
        return StreamingResponse(io.BytesIO(image_bytes.read()), media_type="image/png")
     except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
     
@app.post("/predict/Chickenpox")
async def upload_image(file: UploadFile = File(...)):
     try:
        with open(f"{file.filename}", "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        image_Path1 = f"{file.filename}"
        print("Path of the input file:", image_Path1)
        image_bytes = colab.predict(file.filename,r'C:\Users\raja-7\Downloads\Chickenpox.pt')
        return StreamingResponse(io.BytesIO(image_bytes.read()), media_type="image/png")
     except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
     