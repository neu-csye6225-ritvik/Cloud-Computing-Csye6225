import healthRouter from './route-health.js';
const route = (app) => {
    app.use('/healthZ',healthRouter);

    app.all('*', (req, res) => {
        res.status(404).json();
    });
}

export default route;