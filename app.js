var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        self.name = 'Updated c object';
        console.log(this);
        var setname = function(newname) {
            self.name = newname;
        }
        setname('Updated again! The c object')
        console.log(self);
    }
}
c.log();