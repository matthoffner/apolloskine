import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/reset';
import NotesPage from './pages/NotesPage';
const NotePageComponent = lazy(() => import('./pages/NotePage'));
const AddPageComponent = lazy(() => import('./pages/AddPage'));
const EditPageComponent = lazy(() => import('./pages/EditPage'));
const NotFoundPageComponent = lazy(() => import('./pages/NotFoundPage'));
const SharePageComponent = lazy(() => import('./pages/SharePage'));

const NotePage = () => (
  <Suspense fallback={<GlobalStyle />}>
    <NotePageComponent />
  </Suspense>
);
const AddPage = () => (
  <Suspense fallback={<GlobalStyle />}>
    <AddPageComponent />
  </Suspense>
);
const EditPage = () => (
  <Suspense fallback={<GlobalStyle />}>
    <EditPageComponent />
  </Suspense>
);
const NotFoundPage = () => (
  <Suspense fallback={<GlobalStyle />}>
    <NotFoundPageComponent />
  </Suspense>
);
const SharePage = () => (
  <Suspense fallback={<GlobalStyle />}>
    <SharePageComponent />
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
        <Route
          path="/share/:title/:content"
          render={({ match }) => (
            <SharePage
              content={match.params.content}
              title={match.params.title}
            />
          )}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
