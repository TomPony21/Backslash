import fs from 'fs/promises'
import config from '../Config/index.js';

export const initializeGraphData = async () => {
    try {
        const graphData = await fs.readFile(config.graphData, config.readFormat);
        return JSON.parse(graphData)
    } catch (error) {
        console.error('An error occurred while initiliaze data:', error);
    }
};
