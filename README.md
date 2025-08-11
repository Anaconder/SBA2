# What I know

## Requirements

- script should gather data, process it and give the desired result.

- Transform the data to an arrayof objects containing learner id, avg=> percentage the learner scored on the test and assignment Id

- An error should be thrown if an assignment group doesn't belong to it's course,the course id should match.(need more clarification)[probably means that if it is not in the assigments attribute of the assignment group object]

- Use try /catch to prevent invalid inputs

- Assignments that aren't due should not be part of the average.late submission should attract a 10% submission penalty.

- Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [studentubmission]), and returns the formatted result, which should be an array of objects as described above

## Grading Requirements /Minimum Viable product

- Declare variables properly using let and const where appropriate.

- Use operators to perform calculations on variables and literals. done

- Use strings, numbers, and Boolean values cached within variables.

- Use at least two if/else statements to control program flow. Optionally, use at least one switch statement. done

- Use try/catch statements to manage potential errors in the code, such as incorrectly formatted or typed data being fed into your program done

- Utilize at least two different types of loops. 1/2

- Utilize at least one loop control keyword such as break or continue.

- Create and/or manipulate arrays and objects.

- Demonstrate the retrieval, manipulation, and removal of items in an array or properties in an object.done

- Partial credit will be earned depending on the level of adherence to the described behavior.

- Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).

- Include a README file that contains a description of your application.

# What I have

- A course info object that contains an id & name

- An assignment group objectwhich contains id,name, course \_id: number,group weight,assignments

- An assignmentinfo object that contains id, name,due*at and points* possible

- An object of learner submisions ehich contains learner id,assignment_id, submission objeect with attributes score,submitted at.

- The Output should look like this
  const result = [
  {
  id: 125,
  avg: 0.985, // (47 + 150) / (50 + 150)
  1: 0.94, // 47 / 50
  2: 1.0 // 150 / 150
  },
  {
  id: 132,
  avg: 0.82, // (39 + 125) / (50 + 150)
  1: 0.78, // 39 / 50
  2: 0.833 // late: (140 - 15) / 150
  }
  ];

## Step by Step

from course sunbmisssions extract the id
obtain the score from submissions
obtain the score possible
calculate the average i.e the % of scores divided points_possible \* 100
Check the submission dates and use it to determine what qualifies to be included on the average calculation
Obtain the assigment Id from the studentubmission and match with the assigment Id in AssignmnetGroup

# Review

### What could you have done differently during the planning stages of your project to make the execution easier?
cross checked that I had uploaded the code early when my gut told me to.Also maybe making the list items easier and then grouping up the related ones. also have some sort of checklist.

### Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?
the last part was difficult to inplement.maybe a lab on something similar would have beeb nice

### What would you add to, or change about your application if given more time?
would have loved to have my average helper function to calculate the average

### Use this space to make notes for your future self about anything that you think is important to remember about this process, or that may aid you when attempting something similar again?

don't stick to one type of solution every code/ function is replaceable
