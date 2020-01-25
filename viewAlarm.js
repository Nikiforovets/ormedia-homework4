function ViewAlarm(alarm, rootDom){
    this._alarm = alarm;
    this._rootDom = rootDom;

    this._state = document.createElement("div");
    this._sirenState = document.createElement("div");
}

ViewAlarm.prototype.stateChange = function(){
    if(this._alarm._state == true){
        this._state.innerHTML = "Сигнализация включена";
    }
    else{
        this._state.innerHTML = "Сигнализация выключена";
        this._sirenState.innerHTML = "Сирена выключена";
    }
}

ViewAlarm.prototype.sirenStateChange = function(){
    if(this._alarm._state == true){
        if(this._alarm._sirenState == true){
            this._sirenState.innerHTML = "Включена сирена";
        }
        else{
            this._sirenState.innerHTML = "Сирена выключена";
        }
    }
    else{
        this._sirenState.innerHTML = "Сирена выключена";
    }
}

ViewAlarm.prototype.render = function(){
    var alarmContainer = document.createElement("div");
    alarmContainer.className = "alarm-container";


    var name = document.createElement("div");
    name.innerHTML = "Сигнализация";

    var textField = document.createElement("input");
    textField.type = "text";

    var onBtn = document.createElement("button");
    onBtn.className = "on";
    onBtn.innerHTML = "Включить сигнализацию";
    onBtn.addEventListener("click", ()=>{
        this._alarm.on();
        this.stateChange();
    });


    var offBtn = document.createElement("button");
    offBtn.className = "off";
    offBtn.innerHTML = "Выключить сигнализацию";
    offBtn.addEventListener("click", ()=>{
        this._alarm.off();
        this.stateChange();
    });

    var enterBtn = document.createElement("button");
    enterBtn.className = "enter";
    enterBtn.innerHTML = "Войти в дом";
    enterBtn.addEventListener("click", ()=>{
        this._alarm.enterPassword(textField.value);
        this.sirenStateChange();
    });

    var offSiren = document.createElement("button");
    offSiren.className = "offSiren";
    offSiren.innerHTML = "Выключить сирену";
    offSiren.addEventListener("click", ()=>{
        this._alarm.offSiren(textField.value);
        this.sirenStateChange();
    });

    var imgAlarm = document.createElement("img");
    imgAlarm.className = "alarm-img hide";
    imgAlarm.src = "alarm.jpg";

    var fields = document.createElement("div");
    fields.className = "fields";

    var buttons = document.createElement("div");
    buttons.className = "buttons";

    var image = document.createElement("div");
    image.className = "image";

    alarmContainer.appendChild(fields);
    alarmContainer.appendChild(buttons);
    alarmContainer.appendChild(image);
    fields.appendChild(name);
    fields.appendChild(this._state);
    fields.appendChild(this._sirenState);
    fields.appendChild(textField);
    buttons.appendChild(onBtn);
    buttons.appendChild(offBtn);
    buttons.appendChild(enterBtn);
    buttons.appendChild(offSiren);
    image.appendChild(imgAlarm);

    this._rootDom.appendChild(alarmContainer);

    this.stateChange();
    this.sirenStateChange();
}