import React from 'react';
import {MainPage} from './components/mainPage/MainPage';
import axios from 'axios';
import {ArticlePage} from './components/articlePage/ArticlePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export const AppContext = React.createContext();

function App() {
    const url =
        'https://us-central1-news-apple.cloudfunctions.net/queryNews?q=Apple+Google+Tesla+SpaceX+Amazon+Facebook&from=2021-03-01&country=us+gb&language=en&size=25&sortBy=date';
    const [articles, setArticles] = React.useState([]);
    const [selectedArticle, setSelectedArticle] = React.useState(false);

    React.useEffect(() => {
        axios({method: 'get', url})
            .then((response) => {
                setArticles(response.data.hits);
            })
            .catch((error) => console.error(error));
    }, []);

    const openArticle = (selectedArticleIndex) => {
        const article = articles[selectedArticleIndex];
        if (article) {
            setSelectedArticle(article);
            window.scrollTo(0, 0);
        }
    };

    const contextValue = {
        articles,
        openArticle,
        selectedArticle,
    };

    return (
        <AppContext.Provider value={contextValue}>
            <Router>
                <Switch>
                    <Route path={`/article/:articleIndex`}>
                        <ArticlePage />
                    </Route>
                    <Route path={'/'}>
                        <MainPage />
                    </Route>
                </Switch>
            </Router>
        </AppContext.Provider>
    );
}

export default App;
