const path = require('path');

const data = require('../data/employee.js')
//i think fs is going to be need here... or maybe n a seprate database

/*

const tableList = data.tableList
const waitingList = data.waitingList
*/

module.exports = function(app) {
    app.get('/api/employees', function(req,res) {
        res.json(data)
    });

    app.post('/api/employees', function(req,res) {
        data.push(req.body) //?? known incomplete, guessing this has to do with json file instead of js files
        res.json(data)
    });
};

////////////////////////////////////////////
/*  import for reference
let tableList = require('../data/table-list.js');
let waitingList = require('../data/waiting-list.js');

module.exports = function (app) {

  /**
   * GET the waitlist
   *
  app.get('/api/waitinglist', function (req, res) {
    res.json(waitingList);
  });

  /**
   * GET the tablelist 
   *
  app.get('/api/tables', function (req, res) {
    res.json(tableList);
  });

  /**
   * If there are fewer than 5 reservations, add the new reservation to the tablelist
   * Otherwise add the new reservation to the waitlist
   *
  app.post('/api/tables', function (req, res) {
    if (tableList.length < 5) {
      tableList.push(req.body); 
    } else {
      waitingList.push(req.body);
    }

    res.end();
  });
}
*/

/* more reference
// Displays a single employee, or shows 'No employee found'
app.get('/api/employees/:employee', function(req, res) {
  // Grab the selected parameter
  const chosen = req.params.employee;
  console.log(chosen);

  // Filter to show only the selected employee
  for (let i = 0; i < employees.length; i++) {
    if (chosen === employees[i].routeName) {
      return res.json(employees[i]);
    }
  }

  // Otherwise display 'No employee found'
  return res.send('No employee found');
});
///
  app.post('/api/tables', function (req, res) {
    if (tableList.length < 5) {
      tableList.push(req.body); 
    } else {
      waitingList.push(req.body);
    }

    res.end();
  });
  ///

  */