import React from 'react';

export default class extends React.Component {

    openDatepicker() {
        import('./Datepicker').then(m => {
            this.setState({ opened: true, datepicker: m.default });
        });
    }
    
    render() {
        const s = this.state || {}
        const close = () => this.setState({ ...this.state, opened: false });
        const datepicker = s.datepicker && s.opened
            ? this.state.datepicker(close)
            : <span>empty</span>
        
        return <div>
            <h1>Hello :)</h1>
            <button onClick={() => this.openDatepicker()}>open</button>
            <div>{datepicker}</div>
        </div>
    }
}
