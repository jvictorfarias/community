import ora from 'ora';
import App from './app';

const { app } = new App();

app.listen(process.env.PORT || 3333, () => {
  ora('Server Running').succeed();
});
