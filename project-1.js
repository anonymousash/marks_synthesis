function mks()
{
  var name = document.getElementById('name').value
  var maths = eval(document.getElementById('M').value)
  var physics = eval(document.getElementById('P').value)
  var chem = eval(document.getElementById('C').value)
  var eng = eval(document.getElementById('E').value)
  var sans = eval(document.getElementById('S').value)
  var tot = maths + physics + chem + eng + sans
  var per = tot/5;
  if(per>90)
  {
  grade= 'A+'
}
    else if(per>75)
    {
  grade = 'A'
}
    else if(per>60)
    {
  grade = 'B'
}
    else if(per>40)
    {
  grade = 'C'
}
    else
    {
  grade = 'F'
}
var t = document.getElementById('T').value=tot;
var p = document.getElementById('A').value=per;
var g = document.getElementById('G').value=grade;

}
