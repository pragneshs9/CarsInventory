System.register(["@angular/core", "@angular/router", "../services/app.service"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, app_service_1, CarEditComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }
        ],
        execute: function () {
            CarEditComponent = /** @class */ (function () {
                //constructor(private appService: AppService, private router: Router, private route: ActivatedRoute, private _cookieService: CookieService) { }
                function CarEditComponent(appService, router, route) {
                    this.appService = appService;
                    this.router = router;
                    this.route = route;
                }
                CarEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.params.subscribe(function (params) {
                        var id = params['id'];
                        _this.appService.getCarDetails(id).subscribe(function (item) { return _this.item = item; });
                    });
                };
                CarEditComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                CarEditComponent.prototype.editCar = function () {
                    var _this = this;
                    this.appService.saveCar(this.item).subscribe(function (item) {
                        _this.item = item;
                        _this.router.navigate(['/cars']);
                    }, function (error) { return console.log(error); });
                };
                CarEditComponent.prototype.onCheckChange = function (entry) {
                    alert('hi');
                    alert(entry);
                    this.item.new = entry;
                    alert(this.item.new);
                };
                CarEditComponent = __decorate([
                    core_1.Component({
                        selector: 'car-edit',
                        templateUrl: '../partials/editCars.html'
                    }),
                    __metadata("design:paramtypes", [app_service_1.AppService, router_1.Router, router_1.ActivatedRoute])
                ], CarEditComponent);
                return CarEditComponent;
            }());
            exports_1("CarEditComponent", CarEditComponent);
        }
    };
});
//# sourceMappingURL=car-edit.component.js.map