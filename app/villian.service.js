"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
/**
 * A Serive will always import Injectable
 * Because it was meant to be reuseable
 */
// This thing (@Injectable) looks just like @Component, we can 
// Probably put {}'s inside the () and add settings
var VillianService = (function () {
    function VillianService(http) {
        this.http = http;
        this.villainsUrl = 'app/villains'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    VillianService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    VillianService.prototype.getvillains = function () {
        return this.http.get(this.villainsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    VillianService.prototype.update = function (Villian) {
        var url = this.villainsUrl + "/" + Villian.id;
        return this.http
            .put(url, JSON.stringify(Villian), { headers: this.headers })
            .toPromise()
            .then(function () { return Villian; })
            .catch(this.handleError);
    };
    VillianService.prototype.create = function (name) {
        return this.http
            .post(this.villainsUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    VillianService.prototype.delete = function (id) {
        var url = this.villainsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    VillianService.prototype.getvillainsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getvillains(); });
    };
    VillianService.prototype.getVillian = function (id) {
        return this.getvillains()
            .then(function (villains) { return villains.find(function (Villian) { return Villian.id === id; }); });
    };
    VillianService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VillianService);
    return VillianService;
}());
exports.VillianService = VillianService;
//# sourceMappingURL=villian.service.js.map