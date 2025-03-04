from ultralytics import YOLO
import io

def predict(imagePath):
    from PIL import Image
    model = YOLO(r'C:\Users\raja-7\Downloads\best.pt')  # load a custom model
    # Validate the model


    # Provide an image as input and get the prediction
    results = model.predict(imagePath)  # replace with your image path
    print("prediction done....")

    # Display the image
    import matplotlib
    matplotlib.use('Agg')
    import matplotlib.pyplot as plt
    from matplotlib.patches import Rectangle
    from PIL import Image
    import os


    # Load the image

    img = Image.open(imagePath)
    plt.imshow(img)
    plt.axis('off')

    # Display bounding boxes with class labels
    for result in results:
        for box in result.boxes:
            x1, y1, x2, y2 = box.xyxy[0].cpu().numpy()  # Get bounding box coordinates
            class_id = int(box.cls[0].cpu().numpy())  # Get the class ID
            label = result.names[class_id]  # Get the class label
            confidence = box.conf.item()  # Get the confidence score

            # Draw the bounding box
            plt.gca().add_patch(Rectangle((x1, y1), x2-x1, y2-y1, edgecolor='red', facecolor='none', linewidth=2))

            # Add the class label and confidence
            plt.text(x1, y1, f'{label}: {confidence:.2f}', color='white', fontsize=12, backgroundcolor='red')
    
    if os.path.exists('result.png'):
        os.remove('result.png')
    else:
         print(f"{'result.png'} does not exist.")
    plt.show()
    plt.savefig('result.png',format='png')
    plt.close()
    with open('result.png', 'rb') as image_file:
             image_bytes = io.BytesIO(image_file.read())
    return image_bytes

