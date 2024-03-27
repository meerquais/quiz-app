# Quiz App

The Quiz App is a React application that allows users to take quizzes consisting of multiple-choice questions. It utilizes the `Question` component to display individual questions within the quiz.

## Features

- Display questions one at a time.
- Progress bar indicating the time remaining for each question.
- Ability to select an answer for each question.
- Navigation to the next question.
- Display of the current question count out of the total number of questions.

## Components

### Question Component

The `Question` component is responsible for displaying a single question within the quiz. It includes the question title, options, progress bar, and a control button to move to the next question.

#### Props

- `question`: Object containing the question data, including `title` (string) and `options` (array of strings).
- `totalQuestions`: Total number of questions in the quiz (integer).
- `currentQuestion`: Index of the current question (integer).
- `setAnswer`: Function to handle user selection of an option.

## Usage

To use the Quiz App, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Access the Quiz App in your web browser.

## Contributing

Contributions to the Quiz App are welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make changes and commit them to your branch.
4. Push your branch to your fork.
5. Submit a pull request to the main repository.

## License

The Quiz App is licensed under the MIT License. See [LICENSE](LICENSE) for more information.
