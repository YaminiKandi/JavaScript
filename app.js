var c = {
    name: 'The c object',
    log: function() {
        this.name = 'Updated c object'
        console.log(this);
    }
}
c.log();
