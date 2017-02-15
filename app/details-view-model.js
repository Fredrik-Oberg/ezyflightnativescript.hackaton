var frameModule = require("ui/frame");
var topmost = frameModule.topmost;

var Observable = require("data/observable").Observable;

function createViewModel(page, context) {
    var viewModel = new Observable();
    viewModel.depAirport = context.depAirport;
    viewModel.arrAirport = context.arrAirport;
    viewModel.depDate = context.depDate;
    viewModel.arrDate = context.arrDate;
    return viewModel;
}

exports.createViewModel = createViewModel;