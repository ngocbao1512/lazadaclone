import React,{Component} from 'react';

class Onlyforyou extends Component {
    render() {
        return (
            
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 elementonlyforyou">   
                    <img src={this.props.image} className="img-responsive" alt="Image" />
                    <p className="tensanpham">{this.props.tensanpham}</p>
                    <span className="giaban">{this.props.giaban}</span>
                    <p className="gianhap">{this.props.gianhap}<span>{this.props.giamgia}</span></p>
            </div>
            
        );
    }
}
export default Onlyforyou;