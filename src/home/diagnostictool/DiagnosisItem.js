PropTypes;
import autobind from "autobind-decorator";
import React, { Component } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { FontAwesome5 } from '@expo/vector-icons';
import { Theme } from "../../components";
const { width, height } = Dimensions.get('window');
import { NavigationEvents } from "react-navigation";
import contactData from '../../mocks/contact.json'

export default class ListItem extends Component {

// CHANGE THIS TO goToDiagnosisDetailView() -- navigation.navigate("DiagnosisDetailView"), replace pet_uid with just id
// Use diagnosis_id (id) for switch cases of descriptions in DiagnosisDetailView
  @autobind
  goToDiagnosisDetailView() {
    const diagnosis_id = this.props.id
    // this.props.navigation.navigate("PetDetailView", { pet_uid });
    this.props.navigation.navigate("DiagnosisDetailView", { diagnosis_id });
  }

  render() {
    const { name, pic, color, seen, selected, key, id, species, breed, diagnosis_id } = this.props;
    var speciesColor;
    var petIcon;

    switch (species) {
      case "Cat":
        petIcon = "cat";
        speciesColor = "#ffb347";
        break;
      case "Dog":
        petIcon = "dog";
        speciesColor = "#0080ff";
        break;
      case "Bird":
        petIcon = "dove";
        speciesColor = "#c93335";
        break;
      case "Horse":
        petIcon = "horse";
        speciesColor = "#77dd77";
        break;
      case "Fish":
        petIcon = "fish";
        speciesColor = "#71b6f7";
        break;
      case "Exotic":
        petIcon = "spider";
        speciesColor = "#9379c2";
        break;
      default:
        petIcon = "clipboard-check";
        speciesColor = Theme.palette.black;
        break;
    }

    return (
      <TouchableOpacity
        style={[
          {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }
        ]}
        onPress={this.goToDiagnosisDetailView}
      >
        <View
          style={{
            paddingBottom: 15,
            paddingTop: 15,
            flex: 1,
            width,
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: 'white'
          }}
        >
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center'
            }}
          >
            {pic == null && (
              <View
                resizeMode="contain"
                style={{
                  height: 50,
                  width: 50,
                  margin: 8,
                  borderRadius: 25,
                }}>
                <FontAwesome5 name={petIcon} size="40%" color={speciesColor} />
              </View>
            )}
            {pic != null && (
              <Image
                source={{ uri: pic }}
                resizeMode="contain"
                style={{
                  height: 50,
                  width: 50,
                  margin: 8,
                  borderRadius: 15,
                }}
              />
            )}
          </View>
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 210
              }}
            >
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 36,
                  color: speciesColor
                }}
              >
                {name}
              </Text>
            </View>
            {breed && (
              <Text
                style={{
                  height: 35,
                  fontSize: 20,
                  fontWeight: '300',
                  color: speciesColor
                }}
              >
                {' '}
                {breed}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
ListItem.propTypes = {
  // Selected:PropTypes.bool,
  seen: PropTypes.bool,
  name: PropTypes.string,
  pic: PropTypes.string,
  species: PropTypes.string,
  createspeciesColor: PropTypes.bool
};
ListItem.DefaultProps = {
  /*
   * Name:PropTypes.string,
   * pic:PropTypes.string,
   * species:"",
   */
  selected: false,
  createspeciesColor: true
};