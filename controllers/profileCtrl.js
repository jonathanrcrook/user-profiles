module.exports = {
  getProfiles: function (req, res, next) {
    // console.log(req.session.user)
    var newArr = [];
    var friends = req.session.user.friends;
    for(var i = 0; i < profiles.length; i++) {
      for(var g = 0; g < friends.length; g++) {
        if(profiles[i].name === friends[g]) {
          newArr.push(profiles[i]);
        }
      }
    }
    return res.send({ currentUser: req.session.user, friends: newArr })
  }
}


var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];
