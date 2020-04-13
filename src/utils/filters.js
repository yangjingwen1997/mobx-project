const fillzero = n => n < 10 ? '0' + n : '' + n;


const date = time => {

  let fillzero = n => n < 10 ? '0' + n : '' + n;

  let d=new Date();
  d.setTime(time)
  let year = d.getFullYear();
  let month = d.getMonth()+1;
  let date = d.getDate();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  return `${year}年${fillzero(month)}月${fillzero(date)}日 ${fillzero(hour)}:${fillzero(min)}:${fillzero(sec)}`

};

export {fillzero,date}