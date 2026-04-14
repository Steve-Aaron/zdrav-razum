import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { Colors } from '../constants/Colors';

const Footer = ({ theme }) => {
  const currentColors = Colors[theme];

  return (
    <View style={[styles.footer, { borderTopColor: currentColors.text }]}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <MotiView
            from={{ scaleX: 2, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ 
              type: 'spring',
              stiffness: 80,
              damping: 15,
              mass: 1 
            }}
          >
            <Text 
              style={[
                styles.logoText, 
                { color: currentColors.text }
              ]}
              numberOfLines={1}
            >
              ЗДРАВ РАЗУМ
            </Text>
          </MotiView>
        </View>
        
        <View style={[styles.bottom, { borderTopColor: currentColors.dots }]}>
          <Text style={[styles.copyright, { color: currentColors.text }]}>
            © {new Date().getFullYear()} Здрав Разум България. Всички права запазени.
          </Text>
          <View style={styles.links}>
            <Text style={[styles.link, { color: currentColors.text }]}>Фейсбук</Text>
            <Text style={[styles.link, { color: currentColors.text }]}>Инстаграм</Text>
            <Text style={[styles.link, { color: currentColors.text }]}>Телеграм</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    borderTopWidth: 2,
    paddingTop: 64,
    paddingBottom: 32,
    marginTop: 64,
  },
  container: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 64,
  },
  logoText: {
    fontSize: 100,
    fontWeight: '900',
    textAlign: 'center',
    // Using a large font size with flex to mimic the Wolff Olins feel
    letterSpacing: -2,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingTop: 32,
  },
  copyright: {
    fontSize: 12,
  },
  links: {
    flexDirection: 'row',
    gap: 24,
  },
  link: {
    fontSize: 12,
    fontWeight: '600',
  }
});

export default Footer;
