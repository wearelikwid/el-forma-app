import { warmups } from './exercises.js';
import { shuffleArray } from './utils.js';

export function generateWarmup() {
    let warmup = '<h3 class="section-title">Warm-up (5-10 minutes)</h3><ul class="exercise-list">';
    const shuffledWarmups = [...warmups];
    shuffleArray(shuffledWarmups);
    
    for (let i = 0; i < 5; i++) {
        warmup += `<li><span class="exercise-name">${shuffledWarmups[i][0]}:</span> ${shuffledWarmups[i][1]}</li>`;
    }
    
    warmup += '</ul>';
    return warmup;
}
