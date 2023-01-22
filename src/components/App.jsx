import { Layout } from './Layout/Layout';
import { Appbar } from './AppBar/Appbar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';

export const App = () => {
  return (
    <Layout>
      <Appbar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
