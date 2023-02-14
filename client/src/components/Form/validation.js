export function validarInputs(inputs, dogTemperaments){
  var errors={};
  if(!inputs.name){
    errors.name="Please enter a value"
  }else if (!inputs.minHeight || !inputs.maxHeight){
    errors.height="Please enter both values"
  }else if(parseInt(inputs.minHeight)>parseInt(inputs.maxHeight)){
    errors.height="Min height must be less than max height"
  }else if (!inputs.minWeight || !inputs.maxWeight){
    errors.weight="Please enter both values"
  }else if(parseInt(inputs.minWeight)>parseInt(inputs.maxWeight)){
    errors.weight="Min weight must be less than max weight"
  }else if (!inputs.minLife || !inputs.maxLife){
    errors.life="Please enter both values"
  }else if(parseInt(inputs.minLife)>parseInt(inputs.maxLife)){
    errors.life="Min life span must be less than max life span"
  }else if(dogTemperaments.length===0){
    errors.temperaments="Please select a temperament"
  }
  return errors
}
