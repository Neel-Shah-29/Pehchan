# Our Solution for Unskript Hackathon

### Problem Statement
In the ever-evolving metaverse, the need for digitising text documents and
extracting their essential data is becoming more crucial. However, the quality of
these documents can often be poor, resulting in low-quality Optical Character
Recognition (OCR) data and poor document intelligence extraction.

### Our Solution
- > We decided to assess the quality of the documents and determine if they are
fit to undergo OCR and further processing using computer vision, image
processing methods, and machine learning models, or any other solution
that provides the best outcome.
- > Image can vary in size, colour, format, and quality.
- > We will classify the documents into three categories: GOOD,
MODERATE, and POOR, based on the accuracy of OCR text (including
numbers and special characters) 
- > Document quality classes are defined as:
  - GOOD - >= 95% accuracy
  - MODERATE - 88 to 95%
  - POOR - below 88%
  
### Our model
- > We have used ***LayoutLM*** model which is a simple but effective pretraining method of text and layout for document image understanding and information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results on several downstream tasks.
- > It can successfully distinguish different categories of image
- > Model Accuracy is 85%
- > Average Proccessing time is nearly 0.6s
![image (2)](https://user-images.githubusercontent.com/82211574/218295339-8a7a0573-2900-4e08-ba7e-3b80cba17969.png)


### Model Features
1. ***Login/SignUp*** : It has several authentications and also the passwords are hashed to increase the security.
2. ***Quality of Image*** : Quality of image is decided on above mentioned criteria.
3. ***Data Extraction*** : We have implemented tesseract which is an optical character recognition (OCR) tool for python.
De-Skew, Despeckle, Script recognition, Character isolation or segmentation, Normalization were used for pre-processing.
4. ***Edit Image*** : It supports 6 different feautures including crop,flip,rotate,etc. You can also save edited images.

### Flowchart
![image (1)](https://user-images.githubusercontent.com/82211574/218295271-bd2a358e-1955-4800-972b-a99c7c9475bc.png)
  
### 👨‍💻Team Members
- [Kunal Agarwal](https://github.com/KunalA18)
- [Neel Shah](https://github.com/Neel-Shah-29)
- [Chaitya Vora](https://github.com/vorachaitya)
- [Harshil Shah](https://github.com/harshilshah99)

