import React, { Component } from "react";
class NewsList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.data.map(item => {
                        return (
                            <article key={item.id} className="list_news">
                                <h4 className="title_news">
                                    <a href={`${process.env.PUBLIC_URL}/article?url=${item.url}`} title={item.title}>
                                        {item.title}
                                    </a>
                                </h4>
                                {item.imgUrl &&
                                    <div className="thumb_art">
                                        <a href={item.url} title={item.title}>
                                            <img src={item.imgUrl} /> 
                                        </a>
                                    </div>
                                }
                                <p className="description">
                                    <a href={item.url} title={item.title}>{item.description}</a>
                                </p>
                            </article>
                        );
                    })
                }
            </div>
        );
    }
}

export default NewsList;