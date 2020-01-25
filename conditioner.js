function Conditioner(model){
    //Devices.call(this, model); // то же самое что и create
    this._currentTemperature = 0;
}

Conditioner.prototype = Object.create(Devices.prototype);
Conditioner.prototype.constructor = Conditioner;

Conditioner.prototype.plusTemperature = function(){
    if(this._currentTemperature < 25 && this._state == true){
        this._currentTemperature += 2;
    }
}

Conditioner.prototype.minusTemperature = function(){
    if(this._currentTemperature > -5 && this._state == true){
        this._currentTemperature -= 2;
    }
}

Conditioner.prototype.getCurrentTemperature = function(){
    return this._currentTemperature;
}