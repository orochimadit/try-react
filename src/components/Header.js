import React, { Component } from 'react';

class Header extends Component{
    //disarankan menuliskan fungsi props didalam nya
    constructor(props){
        super(props);
        this.state={
            daftar :"Daftar Makanan Nusantara",
            dataList :this.props.list
        };

    }
    render(){
        return(
            <div>
                <h2>Makanan khas indonesia</h2>
                <p>{this.state.daftar}</p>
                <p>{this.state.dataList}</p>
            </div>
        );
    }
}
export default Header;