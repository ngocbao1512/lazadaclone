import React,{Component} from 'react';

class Lazmall extends Component {
    render() {
        return (
            
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 elementlazmall">
                
                <img src={this.props.banner} className="banner" />
                
                <img src={this.props.logo} className="logo" />

                <p className="ten">{this.props.ten}</p>

                <p className="mota">{this.props.mota}</p>
                
            </div>
            
        );
    }
}

export default Lazmall;