# To-Do-List
## Do List

This is a simple To Do List web application built with HTML, CSS, and JavaScript. It allows you to add tasks along with their due dates, mark them as completed, and delete them from the list.
Features

    Add tasks with due dates.
    View a list of added tasks.
    Delete tasks from the list.

How to Use

    Enter the task name in the "Enter Task" input box.
    Select the due date for the task using the date picker.
    Click the "Add" button to add the task to the list.
    To delete a task, click the "Delete" button next to the task you want to remove.

Implementation Details

The application is implemented using HTML, CSS, and JavaScript. The main functionality is handled by the Adder() function, which adds tasks to the doList array and then calls the printer() function to display the updated list on the screen.
Code Structure

The main code is divided into three parts:

    HTML: The HTML file (index.html) contains the basic structure of the web page, including input fields, buttons, and the container for the printed list.

    CSS: The CSS file (style.css) provides the styling for the web page, including the layout of the printed list and the appearance of the "Add" and "Delete" buttons.

    JavaScript: The JavaScript file (list.js) contains the logic for adding tasks, displaying the list, and handling task deletion. The localStorage API is used to store the tasks locally, so the list persists even if you refresh the page.

How to Run the Application

Simply open the index.html file in your web browser, and you'll see the To Do List application.
Compatibility

The application should work on modern web browsers that support JavaScript and HTML5.
