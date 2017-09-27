// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    name: "Ahmed",
    photoLink: "ahmed@example.com",
    score: [
    	4,
    	2,
    	2,
    	3,
    	2,
    	3,
    	4,
    	5,
    	2,
    	5
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
