import React from 'react';
import {MainPage} from './components/mainPage/MainPage';
import axios from 'axios';
import {ArticlePage} from './components/articlePage/ArticlePage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export const AppContext = React.createContext();

function App() {
    const url =
        'https://newsapi.org/v2/everything?q=apple&from=2021-02-23&to=2021-03-02&sortBy=popularity&apiKey=1b1391fcf4054a89b20b384d363cec28';
    const [articles, setArticles] = React.useState([]);
    const [selectedArticle, setSelectedArticle] = React.useState(false);

    React.useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setArticles(response.data.articles);
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
