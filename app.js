var TenthStudent = /** @class */ (function () {
    function TenthStudent() {
        this._telmarks = 0;
        this._hinMarks = 0;
        this._engMarks = 0;
        this._mathsMarks = 0;
        this._sciMarks = 0;
        this._Socmarks = 0;
    }
    Object.defineProperty(TenthStudent.prototype, "telmarks", {
        get: function () {
            return this._telmarks;
        },
        set: function (value) {
            this._telmarks = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TenthStudent.prototype, "hinMarks", {
        get: function () {
            return this._hinMarks;
        },
        set: function (value) {
            this._hinMarks = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TenthStudent.prototype, "engMarks", {
        get: function () {
            return this._engMarks;
        },
        set: function (value) {
            this._engMarks = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TenthStudent.prototype, "mathsMarks", {
        get: function () {
            return this._mathsMarks;
        },
        set: function (value) {
            this._mathsMarks = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TenthStudent.prototype, "sciMarks", {
        get: function () {
            return this._sciMarks;
        },
        set: function (value) {
            this._sciMarks = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TenthStudent.prototype, "Socmarks", {
        get: function () {
            return this._Socmarks;
        },
        set: function (value) {
            this._Socmarks = value;
        },
        enumerable: false,
        configurable: true
    });
    return TenthStudent;
}());
var Nagarathna = new TenthStudent();
Nagarathna.telmarks = 66;
Nagarathna.hinMarks = 51;
Nagarathna.engMarks = 45;
Nagarathna.mathsMarks = 75;
Nagarathna.sciMarks = 82;
Nagarathna.Socmarks = 98;
console.log(Nagarathna.telmarks);
console.log(Nagarathna.hinMarks);
console.log(Nagarathna.engMarks);
console.log(Nagarathna.mathsMarks);
console.log(Nagarathna.sciMarks);
console.log(Nagarathna.Socmarks);
console.log(Nagarathna.Socmarks + Nagarathna.hinMarks + Nagarathna.engMarks + Nagarathna.mathsMarks + Nagarathna.sciMarks + Nagarathna.Socmarks);
