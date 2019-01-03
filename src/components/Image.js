import React ,{Component} from "react";

class Image extends Component {
    render(){
        return(
            <img
                src={this.props.linkGambar}
                alt="Gambar makanan"
                width={this.props.lebar}
            />
        );
    }
}
export default Image