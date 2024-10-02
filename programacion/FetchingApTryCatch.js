"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var url = "https://pokeapi.co/api/v2/pokemon/";
function PokeFetchFun(endpoint) {
    return __awaiter(this, void 0, void 0, function () {
        var main, links, links2, req, res, 
        // la plantilla para iterar la informacion
        template, 
        // si existe mas consenido en una segunda pagina o anterior pagina
        nextPage, backPage, i, reqResults, resResults, error_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    main = document.querySelector(".main_class");
                    links = document.querySelector(".links");
                    links2 = document.querySelector(".links2");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 11, , 12]);
                    if (main) {
                        main.innerHTML = "<p>Cargando...</p>";
                    }
                    return [4 /*yield*/, fetch(endpoint)];
                case 2:
                    req = _a.sent();
                    return [4 /*yield*/, req.json()];
                case 3:
                    res = _a.sent(), template = "", nextPage = "", backPage = "";
                    i = 0;
                    _a.label = 4;
                case 4:
                    if (!(i < res.results.length)) return [3 /*break*/, 10];
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 8, , 9]);
                    return [4 /*yield*/, fetch(res.results.slice(0, 10)[i].url)
                        // El array que contiene todos los pokemons
                    ];
                case 6:
                    reqResults = _a.sent();
                    return [4 /*yield*/, reqResults.json()];
                case 7:
                    resResults = _a.sent();
                    console.log(resResults);
                    // if(!reqResults.ok) throw { status: req.status, statusText: req.statusText}
                    template += "\n                <ul class=\"\">\n                    <div class=\"div_poke\">\n                        <b class=\"\">".concat(resResults.name, "</b>\n                        <img src=\"").concat(resResults.sprites.front_default, "\" alt=\"\">\n                    <div/>\n                </ul>\n                ");
                    if (main)
                        main.innerHTML = template;
                    backPage = res.previous ? "<a  href=\"".concat(res.previous, "\">\u25C0  </a>") : " <a >Nada atras<a/>";
                    nextPage = res.next ? "<a  href=\"".concat(res.next, "\"> \u25B6</a>") : "<a>No hay mas para cargar <";
                    if (links)
                        links.innerHTML = "".concat(backPage, "  ").concat(nextPage, "  ");
                    return [3 /*break*/, 9];
                case 8:
                    error_1 = _a.sent();
                    console.log("Error de peticion");
                    return [3 /*break*/, 9];
                case 9:
                    i++;
                    return [3 /*break*/, 4];
                case 10: return [3 /*break*/, 12];
                case 11:
                    error_2 = _a.sent();
                    console.log("Error de peticion al hacer get");
                    return [3 /*break*/, 12];
                case 12:
                    document.addEventListener("click", function (e) {
                        var _a;
                        if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.matches(".links a")) {
                            e.preventDefault();
                            PokeFetchFun(e.target.getAttribute("href"));
                        }
                    });
                    return [2 /*return*/];
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", function (e) { return PokeFetchFun("https://pokeapi.co/api/v2/pokemon/"); });
