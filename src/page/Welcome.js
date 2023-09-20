import { Route } from 'react-router-dom';

const Welcome = () => {
    return(
        <section>
            <h1>The Welcome Page</h1>
            <Route Path="/welcome/new-user">
                <p>Welcome, new user!</p>
            </Route>
        </section>
    );
};

export default Welcome;