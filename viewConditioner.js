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
}

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
        term.innerHTML = "Текущая температура " + this._conditioner._currentTemperature;
    });

    var minusTemp = document.createElement("button");
    minusTemp.type = "button";
    minusTemp.className = "dec-temp";
    minusTemp.innerHTML = "Уменьшить температуру";
    minusTemp.addEventListener("click", ()=>{
        this._conditioner.minusTemperature();
        term.innerHTML = "Текущая температура " + this._conditioner._currentTemperature;
    });

    

    condition.appendChild(name);
    condition.appendChild(this._state);
    condition.appendChild(term);
    condition.appendChild(model);
    condition.appendChild(onBtn);
    condition.appendChild(offBtn);
    condition.appendChild(plusTemp);
    condition.appendChild(minusTemp);

    this._rootDom.appendChild(condition);

    this.stateChange();
}

