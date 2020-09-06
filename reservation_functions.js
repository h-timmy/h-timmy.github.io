function getAll(json) {
  var text = ""
  for (i = 0; i < json.reservations.length; i++) {
    text += "Name: " + json.reservations[i].name + "/n";
  }
  return text;
}

function add_reservation(json, name, date, startT, endT, reason) {
  var start = new Date(date);
  start.setHours(startT.getHours());
  start.setMinutes(startT.getMinutes());
  var end = new Date(date);
  end.setHours(endT.getHours());
  end.setMinutes(endT.getMinutes());
  var res = '{"name": ' + name + ', "start": ' + start + ', "end": ' + end + ', "reason": ' + reason + '}';
  json.reservations.push(res);
  return json;
}

function get_res_on(json, date) {
  var res = [];
  for (i = 0; i < json.reservations.length; i++) {
    if (json.reservations[i].date == date) {
      res = res.concat(json.reservations[i]);
    }
  }
  return res;
}

function check_occup(json, date, time) {
  var res = get_res_on(json, date);
  var count = 0;
  for (i = 0; i < res.length; i++) {
    if (res[i].start > time || res[i].end < time) {
      //Does not conflict
    }
    else {
      count = count + 1;
    }
  }
  return count;
}
