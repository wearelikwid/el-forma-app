// workoutGenerator.js

// Import workouts and warmups data, and the shuffleArray utility function
import { workouts, warmups } from './exercises.js';
import { shuffleArray } from './utils.js';

// Main function to generate a workout
export async function generateWorkout(type, duration) {
    const exercises = [...workouts[type]];
    shuffleArray(exercises);

    let workout = `<h2>${formatWorkoutType(type)} WORKOUT (${duration} minutes)</h2>`;

    workout += generateWarmup();
    workout += await generateMainWorkout(exercises, duration);
    workout += generateCoolDown();

    return workout;
}

// Function to generate the warm-up section
function generateWarmup() {
    let warmup = '<h3>Warm-up (5-10 minutes)</h3>';
    const shuffledWarmups = [...warmups];
    shuffleArray(shuffledWarmups);
    
    for (let i = 0; i < 5; i++) {
        warmup += `<p>${shuffledWarmups[i][0]}: ${shuffledWarmups[i][1]}</p>`;
    }
    
    return warmup;
}

// Function to generate the main workout section
async function generateMainWorkout(exercises, duration) {
    let workout = '<h3>Main Workout</h3>';
    const numExercises = Math.min(Math.floor(duration / 5), exercises.length);
    
    for (let i = 0; i < numExercises; i++) {
        workout += `<p>${exercises[i][0]}: ${exercises[i][1]}</p>`;
    }
    
    return workout;
}

// Function to generate the cool-down section
function generateCoolDown() {
    return `
        <h3>Cool Down (5-10 minutes)</h3>
        <p>Light jogging or walking: 2-3 minutes</p>
        <p>Static stretching: 3-5 minutes</p>
        <p>Deep breathing exercises: 1-2 minutes</p>
    `;
}

// Helper function to format the workout type
function formatWorkoutType(type) {
    return type.replace(/([A-Z])/g, ' $1').trim().toUpperCase();
}