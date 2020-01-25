function ViewCamera(camera, rootDom){
    this._camera = camera;
    this._rootDom = rootDom;

    this._state = document.createElement("div");
    this._liveRec = document.createElement("div");
    this._nightMode = document.createElement("div");
}

ViewCamera.prototype.stateChange = function(){
    if(this._camera._state == true){
        this._state.innerHTML = "Камера включена";
    }
    else{
        this._state.innerHTML = "Камера выключена";
        this._liveRec.innerHTML = "-";
        this._nightMode.innerHTML = "-";
    }
}

ViewCamera.prototype.liveRecChange = function(){
    if(this._camera._state == true){
        if(this._camera._liveRecording == true){
            this._liveRec.innerHTML = "Прямая трансляция";
        }
        else{
            this._liveRec.innerHTML = "Воспроизведение записи";
        }
    }
    else {
        this._liveRec.innerHTML = "-";
    }
}

ViewCamera.prototype.nightModeChange = function(){
    if(this._camera._state == true){
        if(this._camera._nightMode == true){
            this._nightMode.innerHTML = "Ночной режим включен";
        }
        else{
            this._nightMode.innerHTML = "Ночной режим выключен";
        }
    }
    else this._nightMode.innerHTML = "-";
}

ViewCamera.prototype.render = function(){
    var camContainer = document.createElement("div");
    camContainer.className = "cam-container";

    var name = document.createElement("div");
    name.innerHTML = "Камера";

    var onBtn = document.createElement("button");
    onBtn.className = "on";
    onBtn.innerHTML = "Включить камеру";
    onBtn.addEventListener("click", ()=>{
        this._camera.on();
        this.stateChange();
    });

    var offBtn = document.createElement("button");
    offBtn.className = "off";
    offBtn.innerHTML = "Выключить камеру";
    offBtn.addEventListener("click", ()=>{
        this._camera.off();
        this.stateChange();
    });

    var onliveRecBtn = document.createElement("button");
    onliveRecBtn.className = "onLive";
    onliveRecBtn.innerHTML = "Включить трансляцию";
    onliveRecBtn.addEventListener("click", ()=>{
        this._camera.onLiveRecording();
        this.liveRecChange();
    });

    var offliveRecBtn = document.createElement("button");
    offliveRecBtn.className = "offLive";
    offliveRecBtn.innerHTML = "Включить запись";
    offliveRecBtn.addEventListener("click", ()=>{
        this._camera.offLiveRecording();
        this.liveRecChange();
    });

    var onNightModeBtn = document.createElement("button");
    onNightModeBtn.className = "onNight";
    onNightModeBtn.innerHTML = "Включить ночной режим";
    onNightModeBtn.addEventListener("click", ()=>{
        this._camera.onNightMode();
        this.nightModeChange();
    });

    var offNightModeBtn = document.createElement("button");
    offNightModeBtn.className = "offNight";
    offNightModeBtn.innerHTML = "Выключить ночной режим";
    offNightModeBtn.addEventListener("click", ()=>{
        this._camera.offNightMode();
        this.nightModeChange();
    });

    camContainer.appendChild(name);
    camContainer.appendChild(this._state);
    camContainer.appendChild(this._liveRec);
    camContainer.appendChild(this._nightMode);
    camContainer.appendChild(onBtn);
    camContainer.appendChild(offBtn);
    camContainer.appendChild(onliveRecBtn);
    camContainer.appendChild(offliveRecBtn)
    camContainer.appendChild(onNightModeBtn);
    camContainer.appendChild(offNightModeBtn);

    this._rootDom.appendChild(camContainer);

    this.stateChange();
    this.liveRecChange();
    this.nightModeChange();
}