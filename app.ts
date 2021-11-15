
class TenthStudent {
 private _telmarks: number = 0;
 private _hinMarks: number = 0;
 private _engMarks: number = 0;
 private _mathsMarks: number = 0;
 private _sciMarks: number = 0;
 private _Socmarks: number = 0;
 
 
 
  get telmarks(): number{
      return this._telmarks;
  }

  set telmarks(value: number){
      this._telmarks= value;
  }

  get hinMarks():number{
      return this._hinMarks;
  }

  set hinMarks(value: number){
      this._hinMarks= value
  }

  get engMarks():number{
      return this._engMarks;
  }
   
  set engMarks(value:number){
      this._engMarks= value;
  }

  get mathsMarks():number{
      return this._mathsMarks;
  }
   
  set mathsMarks(value:number){
      this._mathsMarks= value;
  }

  get sciMarks():number{
      return this._sciMarks;
  }
   
  set sciMarks(value:number){
      this._sciMarks= value;
  }

  get Socmarks():number{
      return this._Socmarks;
  }
   
  set Socmarks(value:number){
      this._Socmarks= value;
  }
}

let Nagarathna = new TenthStudent();
Nagarathna.telmarks=66;
Nagarathna.hinMarks=51;
Nagarathna.engMarks=45;
Nagarathna.mathsMarks=75;
Nagarathna.sciMarks=82;
Nagarathna.Socmarks=98;
console.log(Nagarathna.telmarks);
console.log(Nagarathna.hinMarks);
console.log(Nagarathna.engMarks);
console.log(Nagarathna.mathsMarks);
console.log(Nagarathna.sciMarks);
console.log(Nagarathna.Socmarks);
console.log(Nagarathna.Socmarks+Nagarathna.hinMarks+Nagarathna.engMarks+Nagarathna.mathsMarks+Nagarathna.sciMarks+Nagarathna.Socmarks);