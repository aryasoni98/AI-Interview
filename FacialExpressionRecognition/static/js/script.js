(function () {
    if (
        !"mediaDevices" in navigator ||
        !"getUserMedia" in navigator.mediaDevices
    ) {
        alert("Camera API is not available in your browser");
        return;
    }

    // get page elements
    const video = document.querySelector("#video");
    const btnPlay = document.querySelector("#btnPlay");
    const btnPause = document.querySelector("#btnPause");
    const btnScreenshot = document.querySelector("#btnScreenshot");
    const btnVideo = document.querySelector("#btnVideo");
    const btnVideoStop = document.querySelector("#btnVideoStop");
    const btnChangeCamera = document.querySelector("#btnChangeCamera");
    const screenshotsContainer = document.querySelector("#screenshots");
    const canvas = document.querySelector("#canvas");
    const devicesSelect = document.querySelector("#devicesSelect");

    let media_recorder = null;
    // video constraints
    const constraints = {
        video: {
            width: {
                min: 1280,
                ideal: 1920,
                max: 2560,
            },
            height: {
                min: 720,
                ideal: 1080,
                max: 1440,
            },
        },
        // do we need the audio for the video?
        // audio: true,
    };

    // use front face camera
    let useFrontCamera = true;

    // current video stream
    let videoStream;

    // handle events
    // play
    btnPlay.addEventListener("click", function () {
        video.play();
        btnPlay.classList.add("is-hidden");
        btnPause.classList.remove("is-hidden");
    });

    // pause
    btnPause.addEventListener("click", function () {
        video.pause();
        btnPause.classList.add("is-hidden");
        btnPlay.classList.remove("is-hidden");
    });

    // take screenshot
    btnScreenshot.addEventListener("click", async function () {
        const img = document.createElement("img");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0);
        img.src = canvas.toDataURL("image/png");
        screenshotsContainer.prepend(img);
        const response = await fetch('/object_match', {
            method: 'POST',
            body: img.src,
        });
        const data = (await response.json()).detected;
        alert(data);
        await fetch('/image_upload', {
            method: 'POST',
            body: img.src,
        });
    });

    let TIMEOUT;
    btnVideo.addEventListener('click', async (event) => {
        let blobs_recorded = [];
        btnVideo.disabled = true;
        btnVideoStop.disabled = false;
        TIMEOUT = setTimeout(() => {
            media_recorder.stop();
            btnVideo.disabled = false;
            btnVideoStop.disabled = true;
        }, 10000);
        // set MIME type of recording as video/webm
        media_recorder = new MediaRecorder(videoStream, { mimeType: 'video/webm' });

        // event : new recorded video blob available
        media_recorder.addEventListener('dataavailable', (event) => {
            blobs_recorded.push(event.data);
        });

        media_recorder.addEventListener('stop', async () => {
            // create local object URL from the recorded video blobs
            const finalVideoBlob = new Blob(blobs_recorded, { type: 'video/webm' });
            console.log(finalVideoBlob);
            await fetch('/video_upload', {
                method: 'POST',
                body: finalVideoBlob,
            });


            // Following code is for video preview. Not styled at all.
            // Only most recent video is shown... May be we can add a functionality to show multiple videos

            // let videoUrl = URL.createObjectURL(finalVideoBlob);
            // let recordingPreview = document.getElementById("recordingPreview");
            // recordingPreview.src = videoUrl;
            // let downloadButton = document.getElementById("downloadButton");
            // downloadButton.href = videoUrl;
            // downloadButton.download = "RecordedVideo.webm";
            // console.log(finalVideoBlob);

        });

        // start recording with each recorded blob having 1 second video
        media_recorder.start(1000);
    });

    btnVideoStop.addEventListener('click', function () {
        btnVideo.disabled = false;
        btnVideoStop.disabled = true;
        clearTimeout(TIMEOUT);
        media_recorder.stop();
    });

    // switch camera
    btnChangeCamera.addEventListener("click", function () {
        useFrontCamera = !useFrontCamera;

        initializeCamera();
    });

    // stop video stream
    function stopVideoStream() {
        if (videoStream) {
            videoStream.getTracks().forEach((track) => {
                track.stop();
            });
        }
    }

    // initialize
    async function initializeCamera() {
        stopVideoStream();
        constraints.video.facingMode = useFrontCamera ? "user" : "environment";

        try {
            videoStream = await navigator.mediaDevices.getUserMedia(constraints);
            video.srcObject = videoStream;
        } catch (err) {
            alert("Could not access the camera");
        }
    }

    initializeCamera();
})();