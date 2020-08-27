import ora from 'ora';
import App from './app';

const { app } = new App();

app.listen(3333, () => {
  ora('Server Running').succeed();
});
