import React            from 'react';
import Header           from './header';
import Footer           from './footer';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    render() {
        return (
               <div>
                   <Header />
                    <div className="main-content">
                        { React.cloneElement(this.props.children, this.props) }
                    </div>
                   <Footer />
               </div>
        );
    }
}
