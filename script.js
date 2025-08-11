// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];


// Function Declarations





function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  function validateData(course, ag) {
    try{//checks if the course id exists (matches what is in the database)
      if (ag.course_id !== course.id){
        throw `Assignment does not exist for ${course.name}`;// checks if such an assignment exists for that course Id
      };
    }catch(err) {
      console.log(err);
    }
    
    try {
      submissions.forEach(sub => { // checks if the score is a number
        if (typeof sub.submission.score !== "number" || sub.submission.score <= 0) {
          throw `Invalid score for assignment ${course.name}`;
        }
      });
    } catch (err) {
      console.log(err);
    }

    try {
      ag.assignments.forEach(point => { // checks if the score is a number
        if (typeof point.points_possible !== "number" || point.points_possible <= 0) {
          throw `Invalid points total for assignment ${ag.id} in ${ag.name}`;
        }
      });
    } catch (err) {
      console.log(err);
    }


  }

  function isdue (ag){
    const current_date = new Date("2025-08-07");
    return ag.assignments.filter(asgn => new Date(asgn.due_at) <= current_date);
  }

  function LateDeduction(assignment,submissions){ 
    if (new Date(submissions.submission.submitted_at) > new Date(assignment.due_at)) {
      submissions.submission.score -= (assignment.points_possible * 0.1);
    }
  }

  function average(assignment,sub){
    let total=0;
    let grade=0
    
    grade += sub.submission.score
    total += assignment.points_possible

    percentage = (grade/total)*100;
    return percentage;
  }

  function object_aggregator(ag,submissions){
    student={}
    let assignment = isdue(ag)

    submissions.forEach(sub =>{
      const studentId = sub.learner_id;
      if (!assignment) return;
      LateDeduction(assignment,sub)
      average(assignment,sub)
    })

    return Object.values(student).map(stu => {
    stu.avg = percentage;
    id: learner.id;
    avg: Number(avg.toFixed(3));
    return stu;
    });

  } 

  
  // MAINCODE
   try {
    validateData(course, ag, submissions);
  } catch (err) {
    console.error(err.message);
    return; // Stop if invalid
  }

  object_aggregator(ag,submissions)
  
  
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);






// buildLearnerObject()

