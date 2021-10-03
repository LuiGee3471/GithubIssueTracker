import './App.scss';
import Header from './components/header/Header';
import Issues from './components/issues/Issues';
import Repos from './components/repos/Repos';
import SearchBar from './components/search-bar/SearchBar';
import useStorage from './hooks/useStorage';

function App() {
  const [repos, setRepos] = useStorage(JSON.parse(window.localStorage.getItem('repos')) || {}, 'repos');
  const setReposWithLimit = (newRepos) => {
    if (Object.keys(newRepos).length > 4) {
      alert('최대 4개까지 등록 가능합니다.');
    } else {
      setRepos({...newRepos});
    }
  }

  return (
    <>
      <Header />
      <SearchBar 
        repos={repos}
        setRepos={setReposWithLimit}
      />
      <Repos repos={repos} setRepos={setReposWithLimit}/>
      <Issues repos={repos} />
    </>
  );
}

export default App;
