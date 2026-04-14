import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link, usePathname } from 'expo-router';
import { Sun, Moon } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

const Navbar = ({ theme, toggleTheme }) => {
  const pathname = usePathname();
  const currentColors = Colors[theme];

  const navItems = [
    { id: '/', label: 'НАЧАЛО' },
    { id: '/about', label: 'ЗА НАС' },
    { id: '/surveys', label: 'АНКЕТИ' },
    { id: '/results', label: 'РЕЗУЛТАТИ' },
    { id: '/contact', label: 'КОНТАКТ' },
  ];

  return (
    <View style={[styles.navbar, { backgroundColor: currentColors.background, borderBottomColor: currentColors.text }]}>
      <View style={styles.container}>
        <Link href="/" asChild>
          <Pressable>
            <Text style={[styles.logo, { color: currentColors.text }]}>ЗДРАВ РАЗУМ</Text>
          </Pressable>
        </Link>
        
        <View style={styles.navLinks}>
          {navItems.map((item) => {
            const isActive = pathname === item.id;
            return (
              <Link key={item.id} href={item.id} asChild>
                <Pressable
                  style={[
                    styles.navAction,
                    { 
                      backgroundColor: isActive ? currentColors.text : 'transparent',
                      borderColor: currentColors.text,
                      transform: isActive ? [{ translateX: 2 }, { translateY: 2 }] : [],
                    }
                  ]}
                >
                  <Text 
                    style={[
                      styles.linkText, 
                      { color: isActive ? currentColors.background : currentColors.text }
                    ]}
                  >
                    {item.label}
                  </Text>
                </Pressable>
              </Link>
            );
          })}
          
          <Pressable 
            onPress={toggleTheme} 
            style={[styles.themeToggle, { borderColor: currentColors.text }]}
          >
            {theme === 'light' ? 
              <Moon size={18} color={currentColors.text} /> : 
              <Sun size={18} color={currentColors.text} />
            }
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    paddingVertical: 16,
    borderBottomWidth: 2,
    zIndex: 1000,
  },
  container: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: '900',
    fontFamily: 'Outfit_900Black',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  navAction: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 2,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Outfit_700Bold',
  },
  themeToggle: {
    width: 40,
    height: 40,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Navbar;
