import PropTypes from 'prop-types';
import React from 'react';
import {View} from 'react-native';
import _ from 'underscore';
import styles from '@styles/styles';
import EnvironmentBadge from './EnvironmentBadge';
import Text from './Text';

const propTypes = {
    /** Title of the Header */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

    /** Subtitle of the header */
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

    /** Should we show the environment badge (dev/stg)?  */
    shouldShowEnvironmentBadge: PropTypes.bool,

    /** Additional text styles */
    // eslint-disable-next-line react/forbid-prop-types
    textStyles: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
    title: '',
    subtitle: '',
    textStyles: [],
    shouldShowEnvironmentBadge: false,
};
function Header(props) {
    return (
        <View style={[styles.flex1, styles.flexRow]}>
            <View style={styles.mw100}>
                {_.isString(props.title)
                    ? Boolean(props.title) && (
                          <Text
                              numberOfLines={2}
                              style={[styles.headerText, styles.textLarge, ...props.textStyles]}
                          >
                              {props.title}
                          </Text>
                      )
                    : props.title}
                {/* If there's no subtitle then display a fragment to avoid an empty space which moves the main title */}
                {_.isString(props.subtitle)
                    ? Boolean(props.subtitle) && (
                          <Text
                              style={[styles.mutedTextLabel, styles.pre]}
                              numberOfLines={1}
                          >
                              {props.subtitle}
                          </Text>
                      )
                    : props.subtitle}
            </View>
            {props.shouldShowEnvironmentBadge && <EnvironmentBadge />}
        </View>
    );
}

Header.displayName = 'Header';
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
