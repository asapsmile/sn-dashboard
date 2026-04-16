var SB_URL='https://ctrblrzuxczmduaqgxfk.supabase.co';
var SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0cmJscnp1eGN6bWR1YXFneGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNTM1NTIsImV4cCI6MjA5MTkyOTU1Mn0.aF_B1g0mWiK7nL3b9iZaydwll6wOsCO76LKK0zHe4i8';
var OK=['baysal@smileclubone.com','baysal@smileclubone.de'];
var sb=supabase.createClient(SB_URL,SB_KEY);
function ck(){sb.auth.getSession().then(function(r){
  var s=r.data.session;
  if(s&&OK.indexOf(s.user.email)>=0){
    document.getElementById('login-screen').style.display='none';
    document.getElementById('app').style.display='block';
    document.getElementById('user-email').textContent=s.user.email;
  }else{
    if(s){sb.auth.signOut();document.getElementById('login-error').textContent='Access denied.';}
    document.getElementById('login-screen').style.display='flex';
    document.getElementById('app').style.display='none';
  }
});}
function loginGoogle(){sb.auth.signInWithOAuth({provider:'google',options:{redirectTo:'https://sn-controlling.netlify.app'}});}
function logout(){sb.auth.signOut();localStorage.clear();location.reload();}
sb.auth.onAuthStateChange(function(){ck();});
ck();
