## Milestone 1

* Brief description of your planned program analysis and/or visualisation ideas.
  * A JavaScript dynamic analysis tool that tracks the runtime of each function in its codebase.
  * There will be 3 sections to our program.
    * Displaying original code
    * Displaying declarations, like an AST and their runtimes
    * Displaying runtimes of each function using visual components, a shape that varies in size depending on runtime
  * Each function can be looked at in detail. Clicking on their respective visual component would show all of its contents including variables, loops, objects, etc.
* Notes of any important changes/feedback from TA discussion
  * Using runtime and visualizing it is good but we need to focus more on analyzing the data.
* Any planned follow-up tasks or features still to design
  * Implementing our own detection tool that parses through a js codebase and finds declarations of all variables, loops, objects, etc.


## Milestone 2

* Planned division of main responsibilities between team members
  * Tasks to be done: mockup of overall project operation (e.g. what's the user input?), conduct user study, frontend design/implementation (visualization of JavaScript code analysis), implementation of program's runtime analysis using Iroh, implementation of detector for variable declarations and loops, implementation of variable state changes.
  * Individual Responsibilities:
    * Elvin: Iroh, conduct user study
    * Ryan: Iroh, Front-end & Variable declarations and loops detector
    * Jessica: Front-end with mockup of overall project design, Variable declarations and loops detector 
    * Vincent: Front-end with mockup of overall project design, Variable state changes
    * Jerry: Iroh, Variable declarations and loops detector, Varaible state changes

* Roadmap:
  * Week Nov 2:
    * Finalize how the project will operate
    * Finalize how to implement the analysis
    * Finalize how to present analysis results (visualization)
  * Week Nov 9:
    * Conduct first user study
    * Implement how the project accepts user input
    * Start incorporating Iroh's API for runtime analysis
    * Start implementing detector for variable declarations and loops
  * Week Nov 16:
    * Finish implementation of program runtime analysis
    * Finish implementation of detector for variable declaartions and loops
    * Start implementing analysis visualization (how we present the analysis to the user)
  * Week Nov 23:
    * Finish implementation of analysis visualization 
    * Reiterate on implementation based on user study
    * Conduct final user study
    * Finish the video
  
* Progress so far:
  * Finalized project idea
  * Finalized how we will implement the analysis
  * Finalized visualization of results
 
* TA Feedback:
  * Good project idea, as long as we have some analysis that we do ourselves it's fine
  * Suggested us to find a way to connect runtime analysis and declaration detector in the video

## Milestone 3

  * Mockup of analysis design:
    * Have a field where user can upload their javascript file
    * After executing their file, each function will have its evaluated runtime. we will assign a visual element (a simple square shape) to every function and the size of the visual element depends on the runtime. The user will be able to visualize what the runtime of each function is compared to other functions
    * We will also have a dropdown list where the user can click on the function, and it'll show what kind of operations were done in the function such as variable declaration and loops
    * The dropdown list will also show variable state changes throughout the program
  
  * First user study feedback:
    * Visual element is very cool, just need to make sure user understands what the visual elements represent
    * I don't see a connection between the runtime analysis and variable declaration. Seems like two separate things
    
  * Any changes:
    * Will address the issue of connecting runtime analysis and declaration/state changes as it was reflected by both the TA and survey participants
    
## Milestone 4

* Status of Implementation
  * We have implemented Iroh and currently testings its dynamic analysis capabilities. We currently know we can measure performance by measuring the time at function call or first iteration of loop then taking another time at function return or loop termination.
  * Our UI/UX is still in progress.
  * JS code parser for function, loop detection still in progress.
* Plans for final user study
  * We will have users open up the project in their web browser, and have them paste in a piece of JS code.
  * We will ask them to record their screens for the purpose of the video.
  * We will have them follow a guideline using a visual table that we provide, in case they are unsure where to start.
  * We will ask for any final feedback on usability and difficulty.
* Planned timeline for the remaining days
  * Working implementation for user studies compeleted by November 27th.
  * User studies, video production, final adjustments from November 27th-30th.
