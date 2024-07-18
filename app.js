import { workouts, warmups } from './exercises.js';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateMainWorkout(exercises, duration) {
    let workout = '<h3>Main Workout</h3>';
    const numExercises = Math.min(Math.floor(duration / 5), exercises.length);
    
    for (let i = 0; i < numExercises; i++) {
        workout += `<p>${exercises[i][0]}: ${exercises[i][1]}</p>`;
    }
    
    return workout;
}

function generateWarmup() {
    let warmup = '<h3>Warm-up (5-10 minutes)</h3>';
    const shuffledWarmups = [...warmups];
    shuffleArray(shuffledWarmups);
    
    for (let i = 0; i < 5; i++) {
        warmup += `<p>${shuffledWarmups[i][0]}: ${shuffledWarmups[i][1]}</p>`;
    }
    
    return warmup;
}

function generateCoolDown() {
    return `
        <h3>Cool Down (5-10 minutes)</h3>
        <p>Light jogging or walking: 2-3 minutes</p>
        <p>Static stretching: 3-5 minutes</p>
        <p>Deep breathing exercises: 1-2 minutes</p>
    `;
}

// Make generateWorkout function global
window.generateWorkout = function() {
    const type = document.getElementById('workoutType').value;
    const duration = parseInt(document.getElementById('workoutDuration').value);
    const exercises = [...workouts[type]];
    shuffleArray(exercises);

    let workout = `<h2>${type.replace(/([A-Z])/g, ' $1').trim().toUpperCase()} WORKOUT (${duration} minutes)</h2>`;

    // Warmup
    workout += generateWarmup();

    // Main workout
    workout += generateMainWorkout(exercises, duration);

    // Cool Down
    workout += generateCoolDown();

    document.getElementById('workout').innerHTML = workout;
};

// Add event listener to the button
document.getElementById('generateWorkoutBtn').addEventListener('click', generateWorkout);