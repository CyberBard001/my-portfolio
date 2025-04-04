function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5qZvvoAWPEb":
        Script1();
        break;
      case "5aqqmIBWtgh":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('67AAi0oY8aa');
const duration = 59000;
const easing = 'ease-out';
const id = '60sFkLfE0vp';
const pulseAmount = 0.1;
const delay = 5000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('67AAi0oY8aa');
const duration = 59000;
const easing = 'ease-in-out';
const id = '64fpsVRYkCJ';
const growAmount = 0.2;
const delay = 10000;
addToTimeline(
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
