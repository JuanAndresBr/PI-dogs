export function validarInputs(inputs){
  var errors={};
  if(!inputs.name){
    errors.name="Please enter a value"
  }else if (!inputs.minHeight || !inputs.maxHeight){
    errors.height="Please enter both values"
  }else if (!inputs.minWeight || !inputs.maxWeight){
    errors.weight="Please enter both values"
  }else if (!inputs.minLife || !inputs.maxLife){
    errors.life="Please enter both values"
  }
  return errors
}
export function validarTemperaments(dogTemperaments){
  var errors="";
  if(dogTemperaments.length===0){
    errors="ingrese"
  }else{

    console.log(dogTemperaments)
    dogTemperaments.forEach(e => {
        if(e==="DEFAULT"){
  
          errors="Please click on a temperament"
        }
    });
  }
  return errors
}
/*name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    minLife: "",
    maxLife: "", */