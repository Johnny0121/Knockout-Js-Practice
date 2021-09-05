function CounterViewModel() {
    var self = this;
    self.firstName = ko.observable("Christian");
    self.count = ko.observable(0);
    self.increase = function() {
        var currentValue = self.count();
        self.count(currentValue + 1)
    };
    self.decrease = function() {
        var currentValue = self.count();
        if(currentValue > 0) {
            self.count(currentValue - 1)
        }
    };
    self.dogStatus = ko.computed(function() {
        if(self.count() === 1){
            return "DISAPPOINTED";
        }
        else if(self.count() === 2){
            return "LISTENING..."
        }
        else if(self.count() >= 3){
            return "EXCITED";
        }
        return "UPSET"
    });
}

ko.applyBindings(new CounterViewModel(), document.querySelector("#knockout-app"));