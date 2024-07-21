import { generateWorkout } from './workoutGenerator.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('workoutForm');
    const resultSection = document.getElementById('workoutResult');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const type = document.getElementById('workoutType').value;
        const duration = parseInt(document.getElementById('workoutDuration').value);

        resultSection.innerHTML = '<p>Generating workout...</p>';

        try {
            const workout = await generateWorkout(type, duration);
            resultSection.innerHTML = workout;
        } catch (error) {
            resultSection.innerHTML = `<p>Error generating workout: ${error.message}</p>`;
        }
    });
});
