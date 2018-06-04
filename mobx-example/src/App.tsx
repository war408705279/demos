import * as React from "react";
import { RouteComponentProps, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";

import LayoutPage from "./layout/LayoutPage";

export type AppProps = RouteComponentProps<any>;

class App extends React.Component {

    public render(): JSX.Element {
        return (
            <Provider {...this.props}>
                <BrowserRouter>
                    <Route path="/" component={(props: AppProps) => {
                        return <LayoutPage {...props} />;
                    }} />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
