'use strict';

var React = require('react-native');
var {
    WebView
} = React;

var ShopDetail = React.createClass({
            render: function() {
                    return ( < WebView url = {
                                this.props.url
                            }
                            />
                              );
                                }
                                });

module.exports=ShopDetail;
