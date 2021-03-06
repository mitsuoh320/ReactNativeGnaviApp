'use strict';

var React = require('react-native');
var React = require('react-native');
var SearchEntry = require('./SearchEntry.js');

var {
    StyleSheet,
    NavigatorIOS
} = React;

var SearchTab = React.createClass({
            render: function() {
                    return ( < NavigatorIOS style = {
                                styles.container
                            }
                            initialRoute = {
                                {
                                    title: 'Search Entlies',
                                    component: SearchEntry
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

                            var SearchTab = React.createClass({
                                render: function() {
                                    return ( < View style = {
                                            styles.container
                                        } >
                                        < Text style = {
                                            styles.description
                                        } > This is SearchTab!! < /Text>
                          </View >
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
  module.exports = SearchTab;
