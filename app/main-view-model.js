var frameModule = require("ui/frame");
var topmost = frameModule.topmost;

var Observable = require("data/observable").Observable;
function getAirports() {
    return ["joahnnesburg", "capetown"]
}

function createViewModel(page) {
    var viewModel = new Observable();

    viewModel.onSearch = function() {
        var depIndex =this.get("depAirportIndex");
        var navigationData = {
            moduleName: "details-page",
            context: {
                depAirport : getAirports()[depIndex],
                arrAirport : this.get("arrivalAirports"),
                depDate: viewModel.departureDate,
                arrDate: viewModel.arrivalDate,
            },
            animated: false
        };

        topmost().navigate(navigationData);
    }
    viewModel.departureAirports = getAirports();
    viewModel.depAirportChange = function(e) {
        var airportIndex = e.object.selectedIndex === 1 ? 0 : 1;
        this.set("arrivalAirports", [getAirports()[airportIndex]]);
    }
    viewModel.departureDate = new Date();
    viewModel.arrivalDate = new Date();

    return viewModel;
}

exports.loaded = function(args) {
    page = args.object;
};

exports.createViewModel = createViewModel;