require.config({});

var App = null;

require(['jquery', 'knockout', 'src/app', 'src/dom-bindings'], function ($, ko, AppModel, DomBindings) {
    DomBindings.Register();

    App = new AppModel();

    ko.applyBindings(App);

    App.Initialize();
});