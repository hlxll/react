import React, { Component } from 'react';
import { AccessibilityInfo, View, Text, StyleSheet, Button } from 'react-native';

class AccessibilityStatusExample extends Component {
    state = {
        reduceMotionEnabled: false,
        screenReaderEnabled: false,
    };

    componentDidMount() {
        AccessibilityInfo.addEventListener(
            'reduceMotionChanged',
            this._handleReduceMotionToggled
        );
        AccessibilityInfo.addEventListener(
            'screenReaderChanged',
            this._handleScreenReaderToggled
        );

        AccessibilityInfo.isReduceMotionEnabled().then(reduceMotionEnabled => {
            this.setState({ reduceMotionEnabled });
        });
        AccessibilityInfo.isScreenReaderEnabled().then(screenReaderEnabled => {
            this.setState({ screenReaderEnabled });
        });
    }

    _handleReduceMotionToggled = reduceMotionEnabled => {
        this.setState({ reduceMotionEnabled });
    };

    _handleScreenReaderToggled = screenReaderEnabled => {
        this.setState({ screenReaderEnabled });
    };

    render() {
        return (
            <View style={this.styles.container}>
                <Button onPress={() => { this.props.navigation.navigate('Home') }} title="to Home"></Button>
                <Text style={this.styles.status}>
                    The reduce motion is{' '}
                    {this.state.reduceMotionEnabled ? 'enabled' : 'disabled'}.
                </Text>
                <Text style={this.styles.status}>
                    The screen reader is{' '}
                    {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
                </Text>
            </View>
        );
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        status: {
            margin: 30,
        },
    });
}

export default AccessibilityStatusExample;