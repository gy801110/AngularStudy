"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dog_1 = require("./dog");
function configInjector() {
    var injector = core_1.ReflectiveInjector.resolveAndCreate([dog_1.Config]);
    return injector.get(dog_1.Config);
}
exports.configInjector = configInjector;
function dogInjector() {
    var injector = core_1.ReflectiveInjector.resolveAndCreate([dog_1.Dog, dog_1.Pet, dog_1.Config]);
    return injector.get(dog_1.Dog);
}
exports.dogInjector = dogInjector;
//# sourceMappingURL=animal-injector.js.map