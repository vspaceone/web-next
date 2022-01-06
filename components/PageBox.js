import React, { Component } from 'react';

export default class PageBox extends Component {
    render() {

        const firstH = this.props.firstH ? this.props.firstH : 2;
        const FirstH = `h${firstH}`

        const FirstContainer = this.props.firstContainer ? this.props.firstContainer : 'div';

        return (
            <FirstContainer {...this.props.id? {id: this.props.id} : {}} className={this.props.className}>
                <div className={"container-xl text-center "}>
                    <div style={{ paddingTop: "4rem", paddingBottom: "4rem" }} className="row">
                        <div className="col-sm-12">
                            <FirstH style={{ marginBottom: "2rem" }}>{this.props.title}</FirstH>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </FirstContainer>
        )
    }
}