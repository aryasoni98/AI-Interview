# import the module
import cv2

#path allocate
faces=cv2.CascadeClassifier("Facedetection/haarcascade_frontalface_default.xml")
eyes=cv2.CascadeClassifier("Facedetection/haarcascade_eye.xml")

# capture the frame through webcam
capture=cv2.VideoCapture(0)

while True:
   
    _, frame=capture.read()

    #Converting to Grayscale image
    gray_frame=cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
    face=faces.detectMultiScale(gray_frame,1.3,5)

    #cyclye through each coordinate list 
    for (x,y,w,h) in face:
        
        cv2.rectangle(frame,(x,y),(x+w,y+h),(0,0,255),thickness=4)

        #Desctructing data and extracted bounding box coordinates
        mid_x = int(x + h/2) #for mid_detection part 
        mid_y = int(y+ h/2)

        # now the eyes are on the face
        # so we have to make the face frame gray
        gray_face=gray_frame[y:y+h,x:x+w]
        frame = cv2.putText(frame,".", (mid_x, mid_y), cv2.FONT_HERSHEY_DUPLEX, 0.7, (0,0,255),2) #detcts the mid part of the face
        
        color_face=frame[y:y+h,x:x+w]

        # check the eyes on this face
        eye=eyes.detectMultiScale(gray_face,1.3,5)

        # For eye part
        for (a,b,c,d) in eye:
            # we have to draw the rectangle on the eyes
            cv2.rectangle(color_face,(a,b),(a+c,b+d),(0,255,0),thickness=2)

    # show the frame
    cv2.imshow("XYZ ",frame) 
    if cv2.waitKey(1)==27:
        break

# after ending the loop release the frame
capture.release()
cv2.destroyAllWindows()
