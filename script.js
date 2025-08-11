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
      if (course.id !== CourseInfo.id) {
        throw `This course "${course.name}" does not exist`;
      
      }else if ((AssignmentGroup.course_id !== course.id) || AssignmentGroup.assignments.some(assignment => assignment.id !== ag.id)) {
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


  }

  function isdue (){
    const current_date = new Date("2025-08-07");
    const dueAssignments = ag.assignments.filter(a => new Date(a.due_at) <= current_date);
    
    submissions.forEach(due => {
    const assignment = dueAssignments.find(a => a.id === due.assignment_id);
    if (assignment=== undefined) {
      return; 
    }
    });
  }

  function LateDeduction(){
     let score = submission.submission.score;
    if (new Date(sub.submission.submitted_at) > new Date(ag.due_at)) {
      score -= (ag.points_possible * 0.1);
    }
  }

  function average(){
    let total=0;
    let grade=0
    
    submissions.forEach(sub => { // checks if the score is a number
        total += ag.assignment.points_possible
        grade += sub.submission.score
    });

    percentage = (grade/total)*100
    return;
  }

    





  
  
  
  }


  
  
  
  
  
  
  
  
  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);






// buildLearnerObject()