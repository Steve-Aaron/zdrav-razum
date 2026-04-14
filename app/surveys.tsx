import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../src/constants/Colors';
import { useTheme } from '../src/hooks/useTheme';

const Surveys = () => {
  const { theme } = useTheme();
  const currentColors = Colors[theme];

  return (
    <View style={styles.page}>
      <View style={[styles.hero, { borderBottomColor: currentColors.text }]}>
        <View style={styles.container}>
          <Text style={[styles.heroTitle, { color: currentColors.text }]}>АНКЕТИ</Text>
          <Text style={[styles.heroSubtitle, { color: currentColors.text }]}>Твоят глас е важен за здравия разум в България.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.container}>
          <View style={[styles.tactileCard, { borderColor: currentColors.text }]}>
            <Text style={[styles.cardTitle, { color: currentColors.accent }]}>ОЧАКВАЙТЕ СКОРО</Text>
            <Text style={[styles.cardBody, { color: currentColors.text }]}>
              В момента разработваме нашата система за онлайн анкети, за да гарантираме сигурност и представителност на данните.
            </Text>
            <Text style={[styles.cardBody, { color: currentColors.text }]}>
              Междувременно, можете да вземете участие в нашите дискусии и текущи допитвания в социалните мрежи:
            </Text>

            <View style={styles.socialLinks}>
              <Pressable style={[styles.button, { borderColor: currentColors.text }]}>
                <Text style={[styles.buttonText, { color: currentColors.text }]}>ФЕЙСБУК</Text>
              </Pressable>
              <Pressable style={[styles.button, { borderColor: currentColors.text }]}>
                <Text style={[styles.buttonText, { color: currentColors.text }]}>ИНСТАГРАМ</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: { flex: 1 },
  container: { maxWidth: 1200, width: '100%', alignSelf: 'center', paddingHorizontal: 20 },
  hero: { paddingVertical: 96, borderBottomWidth: 2, backgroundColor: 'rgba(0,0,0,0.02)' },
  heroTitle: { fontSize: 56, fontWeight: '900', fontFamily: 'Outfit_900Black', marginBottom: 16 },
  heroSubtitle: { fontSize: 20, maxWidth: 600, fontFamily: 'Inter_400Regular' },
  section: { paddingVertical: 96 },
  tactileCard: { padding: 64, borderWidth: 2, alignItems: 'center' },
  cardTitle: { fontSize: 40, fontWeight: '900', marginBottom: 24, textAlign: 'center', fontFamily: 'Outfit_900Black' },
  cardBody: { fontSize: 18, lineHeight: 28, marginBottom: 24, textAlign: 'center', fontFamily: 'Inter_400Regular' },
  socialLinks: { flexDirection: 'row', gap: 24, marginTop: 16 },
  button: { paddingVertical: 16, paddingHorizontal: 32, borderWidth: 2 },
  buttonText: { fontWeight: '700', fontSize: 14 },
});

export default Surveys;
