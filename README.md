# reactnative-scp4exq

## By Stuart Paine (scp4exq)

This React-Native application is designed to address the requirements of the second mini-app project
for UVA CS 4720 during the Fall 2022 semester.  The app serves as a bucket list, specifically for UVA-related
tasks and activities.

This application was tested using an emulator running Android on a Google Pixel 5.  Each card in the list view
displays the item's title, due date, completion date (if applicable), and a check box to indicate completion status.
Incomplete items are displayed at the top of the list sorted by due date, while completed items are displayed at the bottom of the list sorted by date completed. When an item is checked as completed, the completed date is set to the current date. The date completed can only be set by checking the check box. This was a design decision based on an open interpretation of the project requirements.

I enjoyed gaining exposure to the design component ideology of the React-Native framework that I can apply in future React work.
I like the modularity of components and the ability to use npm packages in the app.  However, I began to miss Android Studio's
drag-and-drop UI creation tools when faced with styling components in a manner similar to HTML and CSS.  Furthermore, I dealt with
performance and interfacing issues when running the app on a local emulator, so I would be inclined to try to test apps on physical
devices in the future.

Further work could be done to redesign the user interfaces, as well as refactor and clean up component code.