# Simple Website with Issue Reporting Form

This project is a simple website that features a map in the background and a form for reporting issues related to Rumor/Hate Speech. The form allows users to submit information that will be stored in a Google Sheet.

## Project Structure

```
simple-website
├── src
│   ├── index.html       # Main HTML document for the website
│   ├── styles.css       # CSS styles for the website
│   └── app.js           # JavaScript for handling form submissions
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Features

- Background map for visual context
- Form titled "Report an Issue" with the following fields:
  - Rumor/Hate Speech
  - Type (Political/Religious/Communal/Others)
  - Location
  - Time and Date
  - Your Email Address
- Submit button to send the form data

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies by running:
   ```
   npm install
   ```
4. Open `src/index.html` in your web browser to view the website.

## Form Submission

The form data will be captured and sent to a Google Sheet for storage. Ensure that you have set up the necessary API access and permissions to allow submissions to your Google Sheet.

## Additional Information

For any issues or contributions, please feel free to open an issue or submit a pull request.