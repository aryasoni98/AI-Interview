FROM python:3.8-slim-buster
ENV PIP_DEFAULT_TIMEOUT=100 \
    PYTHONUNBUFFERED=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PYTHONFAULTHANDLER=1
ADD . /app
WORKDIR /app
RUN apt-get update \
        && apt-get install gcc -y\
        && apt-get install libportaudio2 libportaudiocpp0 portaudio19-dev libasound-dev libsndfile1-dev libgl1-mesa-dev -y \
        && apt-get install build-essential cmake pkg-config -y \
        && pip3 install pyaudio
RUN pip install dlib
RUN pip install -r requirements.txt