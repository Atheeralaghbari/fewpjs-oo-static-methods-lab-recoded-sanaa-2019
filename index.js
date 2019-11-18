class Formatter {
  //add static methods here
  static capitalize(str){
    return str.chartAt(0).toUpperCase()+str.substring(1);
  }
  
   static sanitize(str){
     return str.replace(/^-,['a-zA-Z\s]+/g," ");
   }
   static titleize(str){
     return 
   }
}