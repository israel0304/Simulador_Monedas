m=function(m){
  console.log(m);
};
d=function(d){
  document.write(d);
};

class Cara{
  lado(min,max){
    return parseInt(Math.random()*(max-min)+min);
  }
}

class LanzarM{
  lanzar(nl=1){
    this.recoger=[0,0];
      for(this.i=0;this.i<nl;this.i++){
        this.lados = new Cara().lado(2,0);
        this.evaluar=(this.lados===0)?this.recoger[0]++:this.recoger[1]++;
       }
       return this.recoger;
    }
}

class Simulador{
  constructor(nm=1,nl=1){
    this.monedas=[];
    this.nm=nm;
    this.nl=nl;
  }
  
  simular(){
    for(this.i=0;this.i<this.nm;this.i++){
      this.sim = new LanzarM();
      this.sim.lanzar(this.nl);
      this.a=this.sim.recoger[0];
      this.s=this.sim.recoger[1];
      this.monedas.push({moneda:[this.a,this.s]});
    }
    return this.monedas;
  }
}

class Mostrar{
  constructor(nm=1,nl=1){
    this.nm=nm;
    this.nl=nl;
    this.monedas=new Simulador(this.nm,this.nl).simular();
    this.valores=this.monedas.map(function(monedas){
      return monedas.moneda;
    });
    //this.valores=[];
  }
  
  valor(){
   // m(this.monedas);
    this.valores.forEach(function(valor,indice){
      d(valor+"<br>");
    });
  }
}

prueba = new Mostrar(4,10);
prueba.valor();
//m(prueba.valor());

 mml= new Simulador(1,10);
 monedas = mml.simular();
 //m(monedas);
 valores = monedas.map(function (monedas){
   return monedas.moneda;
 });
 
 valores.forEach(function(valor,indice){
   d(valor+"<br>");
 });