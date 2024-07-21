export async function generateMainWorkout(exercises, duration) {
    let workout = '<h3 class="section-title">Main Workout</h3><ul class="exercise-list">';
    const numExercises = Math.min(Math.floor(duration / 5), exercises.length);
    
    for (let i = 0; i < numExercises; i++) {
        workout += `<li><span class="exercise-name">${exercises[i][0]}:</span> ${exercises[i][1]}</li>`;
    }
    
    workout += '</ul>';
    return workout;
}
