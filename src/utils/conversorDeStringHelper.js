/* eslint-disable linebreak-style */
/* eslint-disable indent */
module.exports = (objetoParams)=>{
  for(let propriedade in objetoParams){
    if( /Id|id/.test(propriedade)){
        objetoParams[propriedade] = Number(objetoParams[propriedade]);
      }
    }
    return objetoParams;
};