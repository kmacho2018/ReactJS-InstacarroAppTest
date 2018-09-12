import React, { Component } from 'react';
import { Button, Label } from 'vanilla-framework-react';

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeRemaining: '',
            lasTimeRemaining: this.props.item.remainingTime
        };
    }

    millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    formatMoney(n, c, d, t) {
        var c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
            j = (j = i.length) > 3 ? j % 3 : 0;

        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };

    getLastAmount(item) {
        var res = item.bids.slice(0).sort(function (a, b) {
            return b.amount - a.amount;
        });
        if (res.length > 0) { return res[0].amount } else { return 0; }

    }

    handleClick(a) {
        var amount = parseInt(a.currentTarget.parentElement.parentElement.parentElement.getElementsByTagName('SPAN')[1].innerText.replace('R$', '').replace(',', '').trim());
        amount = amount + 250;
        var c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = amount < 0 ? "-" : "",
            i = String(parseInt(amount = Math.abs(Number(amount) || 0).toFixed(c))),
            j = (j = i.length) > 3 ? j % 3 : 0;
        var result = s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(amount - i).toFixed(c).slice(2) : "");
        a.currentTarget.parentElement.parentElement.parentElement.getElementsByTagName('SPAN')[1].innerText = 'R$ ' + result;
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.lasTimeRemaining < 1000) {
                this.setState({
                    timeRemaining: this.millisToMinutesAndSeconds(0),
                    lasTimeRemaining: 0
                });
            }
            else {
                this.setState({
                    timeRemaining: this.millisToMinutesAndSeconds(this.state.lasTimeRemaining),
                    lasTimeRemaining: this.state.lasTimeRemaining - 1000
                });
            }

        }, 1000);
    }

    render() {
        return (

            <div className="car" style={{ backgroundColor: '#ffffff' }}>

                <div style={{ 'height': '190px' }}>
                    <img src={this.props.item.imageUrl} style={{ height: '200px', width: '100%' }}></img>
                    <div style={{
                        backgroundColor: 'rgba(0,0,0,0.4)', height: '19px', bottom: '23px',
                        position: 'relative', textAlign: 'center', color: '#FFFFFF'
                    }}><span>ver detalhes</span></div>
                </div>

                <input id="timeElapsed" type="hidden" value={this.props.item.remainingTime}></input>

                <br></br>
                <table>
                    <tbody>
                        <tr style={{ fontSize: '10px' }}>
                            <td><center>TEMPO RESTANTE</center></td>
                            <td><center>ULTIMA OFERTA</center></td>
                        </tr>
                        <tr style={{ borderTop: 'none' }}>
                            <td>
                                <span style={{ color: '#ff6d4a', fontSize: '20px' }}>{this.state.timeRemaining}</span>
                            </td>
                            <td style={{ borderLeft: '2px solid #e4e4e4', color: '#3eb871', fontSize: '20px' }}><span ref="amountSpan">R$ {this.formatMoney(this.getLastAmount(this.props.item), 2, ".", ",")}</span></td>
                        </tr>
                        <tr style={{ borderTop: 'none' }}><td></td></tr>
                        <tr>
                            <td colSpan="2" style={{ border: '2px solid #e4e4e4', fontWeight: 'bold', fontSize: '10px', color: '#323232' }}><span>{this.props.item.make} {this.props.item.model} {this.props.item.version} {this.props.item.year}</span> </td>
                        </tr>
                        <tr>
                            <td style={{ border: '2px solid #e4e4e4' }}>
                                {this.props.item.year}
                            </td>
                            <td style={{ border: '2px solid #e4e4e4' }}>
                                {this.props.item.km} KM
                        </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <Button brand value="Fazer Oferta" onClick={this.handleClick} style={{ width: '100%', color: '#ffffff', 'border-radius': '5px' }} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>)
    }
}


export default Car;