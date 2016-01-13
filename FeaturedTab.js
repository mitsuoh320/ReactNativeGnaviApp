'use strict';

var React = require('react-native');
var EntryList = require('./EntryList.js');

var {
    StyleSheet,
    NavigatorIOS
} = React;

var FeaturedTab = React.createClass({
            render: function() {
                    return ( < NavigatorIOS style = {
                                styles.container
                            }
                            initialRoute = {
                                {
                                    title: 'Featured Entlies',
                                    component: EntryList
                                }
                            }
                            />
											    );
											      }
});

var styles = StyleSheet.create({
	  container: {
		      flex: 1,
		        }
});
/*
var {
    StyleSheet,
    Text,
    View,
} = React;

var FeaturedTab = React.createClass({
    render: function() {
        return ( < View style = {
                styles.container
            } >
            < Text style = {
                styles.description
            } > This is Featured Tab!! < /Text >
                            < /View >
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        fontSize: 15,
        backgroundColor: '#FFFFFF'
    }
});

*/
module.exports = FeaturedTab;
