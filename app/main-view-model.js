

var Observable = require("data/observable").Observable;

function getMessage(counter) {
}

function createViewModel(page) {
    var viewModel = new Observable();
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onSearch = function() {
        this.set("message", getMessage(this.counter));
    }
    viewModel.departureDate = new Date();
    viewModel.arrivalDate = new Date();

    return viewModel;
}

exports.loaded = function(args) {
    page = args.object;
};

exports.createViewModel = createViewModel;