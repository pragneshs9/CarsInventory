System.register(["@angular/core"],function(exports_1,context_1){"use strict";var core_1,SearchFilterPipe,__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};context_1&&context_1.id;return{setters:[function(core_1_1){core_1=core_1_1}],execute:function(){SearchFilterPipe=function(){function SearchFilterPipe(){}return SearchFilterPipe.prototype.transform=function(categories,searchText){return null==searchText?categories:categories.filter(function(category){return category.brand.toLowerCase().indexOf(searchText.toLowerCase())>-1||category.model.toLowerCase().indexOf(searchText.toLowerCase())>-1})},SearchFilterPipe=__decorate([core_1.Pipe({name:"category"}),core_1.Injectable()],SearchFilterPipe)}(),exports_1("SearchFilterPipe",SearchFilterPipe)}}});
//# sourceMappingURL=search-filter.component.js.map
