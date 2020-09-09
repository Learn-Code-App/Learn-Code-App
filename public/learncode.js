// Copyright (c) 2020 @Alt_ on Glitch

// Hiding/showing functions
function _Show(id) {
  document.getElementById(id.id).style.display = 'block';
}
function _ShowTransparency(id) {
  document.getElementById(id.id).style.opacity = '1';
}
function _ShowInline(id) {
  document.getElementById(id.id).style.display = 'inline';
}
function _Hide(id) {
  document.getElementById(id.id).style.display = 'none';
}
function _HideTransparency(id) {
  document.getElementById(id.id).style.opacity = '0';
}
// jQuery like functions
function _(id) {
  return document.getElementById(id.id)
}
// Arithmetic
function _Set(thing, value) {
  thing = value
}
function _Add(thing, value) {
  thing += value
}
function _Subtract(thing, value) {
  thing -= value
}
function _Divide(thing, value) {
  thing /= value
}
// loop function (forever)
function _Loop(callback) {
  _Loop(callback)
}
// writing
function _WriteToDOM(value) {
  return document.write(value)
}
// waiting
function _Wait(value, thing) {
  return window.setTimeout(thing, value)
}
// styling
function _SetStyle(thing) {
  return document.getElementById(thing.id).style
}
// saving/loading for numbers only
function _Save(name, value) {
  localStorage.setItem(name, value)
}
function _LoadTo(thing, name) {
  if (thing == null) {return}
  return thing = localStorage.getItem(name)
}
function _Load(name) {
  return localStorage.getItem(name)
}