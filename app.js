// app.js

// Import the generateWorkout function from workoutGenerator.js
import { generateWorkout } from './workoutGenerator.js';

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to important elements
    const form = document.getElementById('workoutForm');
    const resultSection = document.getElementById('workoutResult');

    // Add a submit event listener to the form
    form.addEventListener('submit', async (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        
        // Get the selected workout type and duration
        const type = document.getElementById('workoutType').value;
        const duration = parseInt(document.getElementById('workoutDuration').value);

        // Show a loading message
        resultSection.innerHTML = '<p>Generating workout...</p>';

        try {
            // Generate the workout
            const workout = await generateWorkout(type, duration);
            // Display the generated workout
            resultSection.innerHTML = workout;
        } catch (error) {
            // If there's an error, display it
            resultSection.innerHTML = `<p>Error generating workout: ${error.message}</p>`;
        }
    });
});