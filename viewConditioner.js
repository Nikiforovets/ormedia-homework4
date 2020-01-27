function ViewConditioner(conditioner, rootDom){
    this._conditioner = conditioner;
    this._rootDom = rootDom;

    this._state = document.createElement("div");
}

//ViewConditioner.prototype = Object.create(Devices.prototype);
//Conditioner.prototype.constructor = ViewConditioner;

ViewConditioner.prototype.stateChange = function(){
    if(this._conditioner._state == true){
        this._state.innerHTML = "Кондиционер включен";
    }
    else{
        this._state.innerHTML = "Кондиционер выключен";
    }
};

ViewConditioner.prototype.checkTemp = function(){
    if(this._conditioner._currentTemperature < -1){
        this._state.parentElement.parentElement.classList.remove("hot");
        this._state.parentElement.parentElement.classList.remove("normal");
        this._state.parentElement.parentElement.classList.add("cold");
    }
    else{
        if(this._conditioner._currentTemperature > 8){
            this._state.parentElement.parentElement.classList.remove("cold");
            this._state.parentElement.parentElement.classList.remove("normal");
            this._state.parentElement.parentElement.classList.add("hot");
        }
        else{
            this._state.parentElement.parentElement.classList.remove("cold");
            this._state.parentElement.parentElement.classList.remove("hot");
            this._state.parentElement.parentElement.classList.add("normal");
        }
    }
};

ViewConditioner.prototype.render = function(){
    var condition = document.createElement("div");
    condition.className = "cond";

    var name = document.createElement("div");
    name.innerHTML = "Кондиционер";

    var term = document.createElement("div");
    term.innerHTML = "Текущая температура " + this._conditioner._currentTemperature;

    var model = document.createElement("div");
    model.innerHTML = "Модель LG";

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "on";
    onBtn.innerHTML = "Включить";
    onBtn.addEventListener("click", ()=>{
        this._conditioner.on();
        this.stateChange();
    });

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "off";
    offBtn.innerHTML = "Выключить";
    offBtn.addEventListener("click", ()=>{
        this._conditioner.off();
        this.stateChange();
    });

    var plusTemp = document.createElement("button");
    plusTemp.type = "button";
    plusTemp.className = "inc-temp";
    plusTemp.innerHTML = "Увеличить температуру";
    plusTemp.addEventListener("click", ()=>{
        this._conditioner.plusTemperature();
        this.checkTemp();
        term.innerHTML = "Текущая температура " + this._conditioner._currentTemperature;
    });

    var minusTemp = document.createElement("button");
    minusTemp.type = "button";
    minusTemp.className = "dec-temp";
    minusTemp.innerHTML = "Уменьшить температуру";
    minusTemp.addEventListener("click", ()=>{
        this._conditioner.minusTemperature();
        this.checkTemp();
        term.innerHTML = "Текущая температура " + this._conditioner._currentTemperature;
    });

    var imgCond = document.createElement("img");
    imgCond.className = "cond-img";
    imgCond.src = "condition.png";

    var fields = document.createElement("div");
    fields.className = "fields";

    var buttons = document.createElement("div");
    buttons.className = "buttons";

    var image = document.createElement("div");
    image.className = "image";

    condition.appendChild(fields);
    condition.appendChild(buttons);
    condition.appendChild(image);
    fields.appendChild(name);
    fields.appendChild(this._state);
    fields.appendChild(term);
    fields.appendChild(model);
    buttons.appendChild(onBtn);
    buttons.appendChild(offBtn);
    buttons.appendChild(plusTemp);
    buttons.appendChild(minusTemp);
    image.appendChild(imgCond);

    this._rootDom.appendChild(condition);

    this.stateChange();
}

