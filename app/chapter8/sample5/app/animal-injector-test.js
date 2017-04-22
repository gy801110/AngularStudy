"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dog_1 = require("./dog");
function equalTest() {
    var injector = core_1.ReflectiveInjector.resolveAndCreate([dog_1.Dog, dog_1.Config]);
    var injector2 = core_1.ReflectiveInjector.resolveAndCreate([dog_1.Dog, dog_1.Config]);
    var dog1 = injector.get(dog_1.Dog);
    var dog2 = injector2.get(dog_1.Dog);
    return dog1 === dog2;
}
exports.equalTest = equalTest;
function equalTestNew() {
    return (new dog_1.Dog(new dog_1.Config()) === new dog_1.Dog(new dog_1.Config()));
}
exports.equalTestNew = equalTestNew;
function equalTestChild() {
    var injector = core_1.ReflectiveInjector.resolveAndCreate([dog_1.Dog, dog_1.Pet, dog_1.Config]);
    var injector2 = injector.resolveAndCreateChild([dog_1.Pet]);
    var pet1 = injector.get(dog_1.Pet);
    var pet2 = injector2.get(dog_1.Pet);
    return pet1 === pet2;
}
exports.equalTestChild = equalTestChild;
function fromResolvedProvidersTest() {
    var providers = core_1.ReflectiveInjector.resolve([dog_1.Dog, dog_1.Pet, dog_1.Config]);
    var injector = core_1.ReflectiveInjector.fromResolvedProviders(providers);
    return (injector.get(dog_1.Pet) instanceof dog_1.Pet) && providers.length == 3;
}
exports.fromResolvedProvidersTest = fromResolvedProvidersTest;
//# sourceMappingURL=animal-injector-test.js.map