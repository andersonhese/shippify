import { App } from './app';

const port = process.env.PORT || 31;

(async () => {
  App.listen(port, () => {
    console.log(`[Delivery APP] listening (http://localhost:${port})`);
  });
})();