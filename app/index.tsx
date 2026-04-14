import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { Link } from 'expo-router';
import { Colors } from '../src/constants/Colors';
import { useTheme } from '../src/hooks/useTheme';

const Home = () => {
  const { theme } = useTheme();
  const currentColors = Colors[theme];

  const policies = [
    "ПРАГМАТИЧНА ЕНЕРГЕТИКА",
    "НАЦИОНАЛЕН СУВЕРЕНИТЕТ",
    "ОТГОВОРНО УПРАВЛЕНИЕ",
    "СПРАВЕДЛИВА ИКОНОМИКА"
  ];

  return (
    <View style={styles.page}>
      {/* 1. Hero Section */}
      <View style={styles.hero}>
        <View style={styles.container}>
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 800 }}
          >
            {policies.map((policy, index) => (
              <MotiText
                key={index}
                from={{ opacity: 0, translateX: -20 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ type: 'timing', delay: 500 + (index * 200), duration: 500 }}
                style={[styles.heroPolicy, { color: currentColors.text }]}
              >
                {policy}
              </MotiText>
            ))}
            <MotiView
              from={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 1500 }}
              style={[styles.badge, { backgroundColor: currentColors.accent }]}
            >
              <Text style={styles.badgeText}>ЗДРАВ РАЗУМ</Text>
            </MotiView>
          </MotiView>
        </View>
      </View>

      {/* 2. Mission Section */}
      <View style={styles.section}>
        <View style={styles.container}>
          <View style={styles.twoColumns}>
            <View style={styles.column}>
              <Text style={[styles.sectionTitle, { color: currentColors.text }]}>ЗАЩО ЗДРАВ РАЗУМ?</Text>
              <Text style={[styles.bodyText, { color: currentColors.text }]}>
                Здрав Разум България бе създаден, защото политиците в България изглежда се грижат повече за собствените си джобове, отколкото за приемането на смислени закони.
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={[styles.bodyText, { color: currentColors.text }]}>
                Нашата политическа кампания не е за ляво или дясно. Тя е за здравия разум. Време е за решения, които работят за хората, а не за политическата класа.
              </Text>
              <Link href="/about" asChild>
                <Pressable style={[styles.button, { borderColor: currentColors.text }]}>
                  <Text style={[styles.buttonText, { color: currentColors.text }]}>НАУЧЕТЕ ПОВЕЧЕ</Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </View>
      </View>

      {/* 3. Survey Grid */}
      <View style={[styles.section, { backgroundColor: 'rgba(0,0,0,0.02)' }]}>
        <View style={styles.container}>
          <Text style={[styles.sectionTitle, styles.centered, { color: currentColors.text }]}>АКТУАЛНИ ТЕМИ</Text>
          <View style={styles.threeColumns}>
            {[
              { title: 'КОРУПЦИЯ', desc: 'Какво мислят българите за нивата на корупция в държавната администрация?' },
              { title: 'ИКОНОМИКА', desc: 'Инфлация, доходи и стандарт на живот - какви са реалните проблеми?' },
              { title: 'НОВИЯТ ПРЕМИЕР', desc: 'Оценка на работата и доверието в новото правителство.' }
            ].map((item, i) => (
              <View key={i} style={[styles.card, { borderColor: currentColors.text }]}>
                <Text style={[styles.cardTitle, { color: currentColors.text }]}>{item.title}</Text>
                <Text style={[styles.cardDesc, { color: currentColors.text }]}>{item.desc}</Text>
                <Pressable style={[styles.noEntryButton, { borderColor: currentColors.text, opacity: 0.6 }]}>
                  <Text style={[styles.buttonText, { color: currentColors.text }]}>КЪМ АНКЕТАТА</Text>
                </Pressable>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* 4. Mosaic Results */}
      <View style={styles.section}>
        <View style={styles.container}>
          <Text style={[styles.sectionTitle, styles.centered, { color: currentColors.text }]}>ГЛАСЪТ НА НАРОДА</Text>
          <View style={styles.mosaicGrid}>
            <View style={[styles.mosaicItem, styles.mosaicLarge, { borderColor: currentColors.text, backgroundColor: currentColors.text }]}>
              <Text style={[styles.mosaicTitle, { color: currentColors.background }]}>ПОСОКА НА ДВИЖЕНИЕ</Text>
              <Text style={[styles.stat, { color: currentColors.background }]}>73.5%</Text>
              <Text style={[styles.mosaicDesc, { color: currentColors.background }]}>от българите смятат, че страната се движи в грешна посока.</Text>
            </View>
            <View style={[styles.mosaicItem, { borderColor: currentColors.text, backgroundColor: currentColors.background }]}>
              <Text style={[styles.mosaicTitle, { color: currentColors.text }]}>ЕВРОПЕЙСКИ СЪЮЗ</Text>
              <Text style={[styles.stat, { color: currentColors.text }]}>63.3%</Text>
              <Text style={[styles.mosaicDesc, { color: currentColors.text }]}>изразяват негативно или неутрално отношение към ЕС.</Text>
            </View>
            <View style={[styles.mosaicItem, { borderColor: currentColors.text, backgroundColor: currentColors.background }]}>
              <Text style={[styles.mosaicTitle, { color: currentColors.text }]}>ОТНОШЕНИЕ КЪМ РУСИЯ</Text>
              <Text style={[styles.stat, { color: currentColors.text }]}>52.1%</Text>
              <Text style={[styles.mosaicDesc, { color: currentColors.text }]}>имат положително или много положително отношение.</Text>
            </View>
          </View>
          <Link href="/results" asChild>
            <Pressable style={[styles.centeredButton, styles.button, { borderColor: currentColors.text }]}>
              <Text style={[styles.buttonText, { color: currentColors.text }]}>ВИЖТЕ ВСИЧКИ РЕЗУЛТАТИ</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: { flex: 1 },
  container: { maxWidth: 1200, width: '100%', alignSelf: 'center', paddingHorizontal: 20 },
  hero: { height: 600, justifyContent: 'center' },
  heroPolicy: {
    fontSize: 64,
    fontWeight: '900',
    fontFamily: 'Outfit_900Black',
    lineHeight: 64,
    marginBottom: 8,
  },
  badge: { alignSelf: 'flex-start', paddingVertical: 8, paddingHorizontal: 32, marginTop: 32 },
  badgeText: { color: 'white', fontSize: 24, fontWeight: '900' },
  section: { paddingVertical: 96 },
  sectionTitle: { fontSize: 40, fontWeight: '700', fontFamily: 'Outfit_700Bold', marginBottom: 32 },
  centered: { textAlign: 'center' },
  bodyText: { fontSize: 18, fontFamily: 'Inter_400Regular', lineHeight: 28, marginBottom: 24 },
  twoColumns: { flexDirection: 'row', gap: 64 },
  column: { flex: 1 },
  threeColumns: { flexDirection: 'row', gap: 32 },
  card: { flex: 1, padding: 32, borderWidth: 2, minHeight: 300, justifyContent: 'space-between' },
  cardTitle: { fontSize: 24, fontWeight: '900' },
  cardDesc: { fontSize: 16, lineHeight: 24, marginVertical: 16 },
  button: { alignSelf: 'flex-start', paddingVertical: 12, paddingHorizontal: 24, borderWidth: 2 },
  centeredButton: { alignSelf: 'center', marginTop: 48 },
  buttonText: { fontWeight: '700', fontSize: 14 },
  noEntryButton: { paddingVertical: 12, paddingHorizontal: 24, borderWidth: 2, alignItems: 'center' },
  mosaicGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  mosaicItem: { flex: 1, minWidth: '45%', padding: 40, borderWidth: 2 },
  mosaicLarge: { width: '100%', flex: 2 },
  mosaicTitle: { fontSize: 14, fontWeight: '900', letterSpacing: 1 },
  stat: { fontSize: 80, fontWeight: '900', marginVertical: 16 },
  mosaicDesc: { fontSize: 18 },
});

export default Home;
