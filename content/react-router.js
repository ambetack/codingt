import React from 'react';
import { Browser Router, Route, Link};

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/movie" component={movie} />
                <Route path="/series" component={Series} />
                <Route component={Error} />
            </Switch>
        </main>
    )
}