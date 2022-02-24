import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';

export default Loader = (props) => {
    const {loading, ...attributes} = props;

    return (
        <Modal 
            transparent={true}
            animationType={'none'}
            visible={loading}
            onRequestClose={() => {
                console.log('close modal');
            }}>
            <View style={styles.modalBackground}>
                <View style={styles.ActivityIndicatorWrapper}>
                    <ActivityIndicator 
                        animating={true}
                        color='#000'
                        size='large'
                        style={styles.activityIndicator}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
    },
    ActivityIndicatorWrapper: {
        backgroundColor: '#fff',
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    }
})