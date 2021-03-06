/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

var React = require('react-native');
var FeaturedTab = require('./FeaturedTab.js');
var SearchTab = require('./SearchTab.js');
//var FETCH=require('node-fetch');
//var to_json =  require('xmljson').to_json;
var MOCKED_MOVIES_DATA = [{
    title: 'Title',
    year: '2015',
    posters: {
        thumbnail: 'http://i.imgur.com/UePbdph.jpg'
    }
}, ];
var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
//var REQUEST_URL = 'http://api.gnavi.co.jp/RestSearchAPI/20150630/?keyid=a8db7996bd9ae9dfd28f48d8ef08fe13&latitude=35.670083&longitude=139.763267&format=json';
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'; 



var {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    View,
    Image
} = React;


var reactnative3 = React.createClass({

    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };

    },

    componentDidMount: function() {
        this.fetchData();
    },


    fetchData: function() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            })
            .done();
    },



/*
    fetchData: function() {
 fetch(REQUEST_URL).then(function(res) {
                }).then(function(body) {
			var Resdata=to_json(body);
		})
		.then((Resdata) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            })
	    .done();
    },
*/
    render: function() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return ( < ListView dataSource = {
                this.state.dataSource
            }
            renderRow = {
                this.renderMovie
            }
            style = {
                styles.listView
            }
            />
    );      
          },

  renderLoadingView: function() {
      return (
            <View style={styles.container}>
                    <Text>
                              Loading movies...
                                      </Text >
            < /View>
                                                );
                                                  },

  renderMovie: function(movie) {
      return (
            <View style={styles.container}>
                    <Image
                              source={{uri: movie.posters.thumbnail}}
                                        style={styles.thumbnail}
                                                / >
            < View style = {
                styles.rightContainer
            } >
            < Text style = {
                styles.title
            } > {
                movie.title
            } < /Text>
                                                                            <Text style={styles.year}>{movie.year}</Text >
            < /View>
                                                                                          </View >
        );
    },


});


var styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    rightContainer: {
        flex: 1,
    },


    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },

    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
});


AppRegistry.registerComponent('reactnative3', () => reactnative3);
