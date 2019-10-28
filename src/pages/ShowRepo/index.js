import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

export default class ShowRepo extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  static PropTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    repoUrl: '',
  };

  componentDidMount() {
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');

    this.setState({ repoUrl: repository.html_url });
  }

  render() {
    const { repoUrl } = this.state;
    return <WebView source={{ uri: repoUrl }} style={{ marginTop: 20 }} />;
  }
}
