export const  millisToMinutesAndSeconds = (millis,withUnit) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    if(withUnit){
        return `${minutes} min ${seconds} sec`
    }else{
        return `${minutes}:${seconds} `
    }
  }