import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/reset';

const NotesPageComponent = lazy(() => import('./pages/NotesPage'));
const NotePageComponent = lazy(() => import('./pages/NotePage'));
const AddPageComponent = lazy(() => import('./pages/AddPage'));
const EditPageComponent = lazy(() => import('./pages/EditPage'));
const NotFoundPageComponent = lazy(() => import('./pages/NotFoundPage'));

const NotesPage = () => (
  <Suspense fallback={<div>loading</div>}>
    <NotesPageComponent />
  </Suspense>
);

const NotePage = () => (
  <Suspense fallback={<div>loading</div>}>
    <NotePageComponent />
  </Suspense>
);
const AddPage = () => (
  <Suspense fallback={<div>loading</div>}>
    <AddPageComponent />
  </Suspense>
);
const EditPage = () => (
  <Suspense fallback={<div>loading</div>}>
    <EditPageComponent />
  </Suspense>
);
const NotFoundPage = () => (
  <Suspense fallback={<div>loading</div>}>
    <NotFoundPageComponent />
  </Suspense>
);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={NotesPage} />
        <Route
          path="/note/:id"
          render={({ match }) => <NotePage id={match.params.id} />}
        />
        <Route path="/add" component={AddPage} />
        <Route
          path="/edit/:id"
          render={({ match }) => <EditPage id={match.params.id} />}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
