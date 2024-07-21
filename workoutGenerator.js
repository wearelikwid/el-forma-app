import { workouts } from './exercises.js';
import { shuffleArray } from './utils.js';
import { generateWarmup } from './warmup.js';
import { generateMainWorkout } from './mainWorkout.js';
import { generateCoolDown } from './cooldown.js';

export async function generateWorkout(type, duration) {
    const exercises = [...workouts[type]];
    shuffleArray(exercises);

    let workout = `
        <div class="workout-result">
            <h2 class="workout-title">${formatWorkoutType(type)} WORKOUT (${duration} minutes)</h2>
            <div class="workout-section">
                ${generateWarmup()}
            </div>
            <div class="workout-section">
                ${await generateMainWorkout(exercises, duration)}
            </div>
            <div class="workout-section">
                ${generateCoolDown()}
            </div>
        </div>
    `;

    return workout;
}

function formatWorkoutType(type) {
    return type.replace(/([A-Z])/g, ' $1').trim().toUpperCase();
}

export function getWorkoutTypes() {
    return Object.keys(workouts);
}

export function getDurationOptions() {
    return [15, 30, 45, 60];
}

export function validateInputs(type, duration) {
    const validTypes = getWorkoutTypes();
    const validDurations = getDurationOptions();

    if (!validTypes.includes(type)) {
        throw new Error(`Invalid workout type. Valid types are: ${validTypes.join(', ')}`);
    }

    if (!validDurations.includes(parseInt(duration))) {
        throw new Error(`Invalid duration. Valid durations are: ${validDurations.join(', ')} minutes`);
    }
}
