// warmup.js

import { warmups } from './exercises.js';
import { shuffleArray } from './utils.js';

export function generateWarmup() {
    let warmup = '<h3>Warm-up (5-10 minutes)</h3>';
    const shuffledWarmups = [...warmups];
    shuffleArray(shuffledWarmups);
    
    for (let i = 0; i < 5; i++) {
        warmup += `<p>${shuffledWarmups[i][0]}: ${shuffledWarmups[i][1]}</p>`;
    }
    
    return warmup;
}