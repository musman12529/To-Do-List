# To Do List App

This is a simple To Do List web application built with HTML, CSS, and JavaScript. It allows you to add tasks along with their due dates, mark them as completed, and delete them from the list.

## Features

- Add tasks with due dates.
- View a list of added tasks.
- Delete tasks from the list.

## How to Run the Application

Simply open the musman12529.github.io/To-Do-List/ file in your web browser, and you'll see the To Do List application.

## How to Use

1. Enter the task name in the "Enter Task" input box.
2. Select the due date for the task using the date picker.
3. Click the "Add" button to add the task to the list.
4. To delete a task, click the "Delete" button next to the task you want to remove.

## Implementation Details

The application is implemented using HTML, CSS, and JavaScript. The main functionality is handled by the `Adder()` function, which adds tasks to the `doList` array and then calls the `printer()` function to display the updated list on the screen.

## Code Structure

The main code is divided into three parts:

1. **HTML:** The HTML file (`index.html`) contains the basic structure of the web page, including input fields, buttons, and the container for the printed list.

2. **CSS:** The CSS file (`style.css`) provides the styling for the web page, including the layout of the printed list and the appearance of the "Add" and "Delete" buttons.

3. **JavaScript:** The JavaScript file (`list.js`) contains the logic for adding tasks, displaying the list, and handling task deletion. The `localStorage` API is used to store the tasks locally, so the list persists even if you refresh the page.

## Compatibility

The application should work on modern web browsers that support JavaScript and HTML5.

## Contributing

If you find any issues with the application or have suggestions for improvement, please feel free to open an issue or submit a pull request on GitHub.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Acknowledgments

The application was created by [Your Name].

---

Thank you for checking out this To Do List application! If you have any questions or need further assistance, please feel free to reach out. Happy task managing!
