// mainWorkout.js

export async function generateMainWorkout(exercises, duration) {
    let workout = '<h3>Main Workout</h3>';
    const numExercises = Math.min(Math.floor(duration / 5), exercises.length);
    
    for (let i = 0; i < numExercises; i++) {
        workout += `<p>${exercises[i][0]}: ${exercises[i][1]}</p>`;
    }
    
    return workout;
}