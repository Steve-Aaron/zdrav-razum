import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Colors } from '../src/constants/Colors';
import { useTheme } from '../src/hooks/useTheme';

const About = () => {
  const { theme } = useTheme();
  const currentColors = Colors[theme];

  const familyImg = "/Users/steveknoxdigi/.gemini/antigravity/brain/5c7028b9-691e-4206-8c8f-791a06da01a4/bulgarian_family_portrait_new_1776091142546.png";
  const marketImg = "/Users/steveknoxdigi/.gemini/antigravity/brain/5c7028b9-691e-4206-8c8f-791a06da01a4/bulgarian_market_scene_new_1776091253653.png";

  return (
    <View style={styles.page}>
      {/* Hero */}
      <View style={[styles.hero, { borderBottomColor: currentColors.text }]}>
        <View style={styles.container}>
          <Text style={[styles.heroTitle, { color: currentColors.text }]}>ЗДРАВ РАЗУМ БЪЛГАРИЯ</Text>
          <Text style={[styles.heroSubtitle, { color: currentColors.text }]}>
            Здрав Разум България е политическа кампания, която не е за ляво или дясно, а за здравия разум.
          </Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.contentSection}>
        <View style={[styles.container, styles.aboutGrid]}>
          {/* Sidebar */}
          <View style={styles.sidebar}>
            <View style={styles.stickyNav}>
              <Pressable><Text style={[styles.navLink, { color: currentColors.text }]}>КОИ СМЕ НИЕ</Text></Pressable>
              <Pressable><Text style={[styles.navLink, { color: currentColors.text }]}>КАКВО ПРАВИМ</Text></Pressable>
              <Pressable><Text style={[styles.navLink, { color: currentColors.text }]}>ЗАЩО СЪЩЕСТВУВАМЕ</Text></Pressable>
            </View>
          </View>

          {/* Main Content */}
          <View style={styles.mainContent}>
            <View style={styles.block}>
              <Text style={[styles.sectionTitle, { color: currentColors.text }]}>КОИ СМЕ НИЕ</Text>
              <View style={[styles.imageCard, { borderColor: currentColors.text }]}>
                <Image source={{ uri: familyImg }} style={styles.image} resizeMode="cover" />
              </View>
              <Text style={[styles.bodyText, { color: currentColors.text }]}>
                Ние сме обикновени български граждани – родители, професионалисти, студенти и пенсионери, които вярват, че България заслужава повече. Ние не сме професионални политици, а хора, които живеят с реалните проблеми на нашето общество.
              </Text>
            </View>

            <View style={styles.block}>
              <Text style={[styles.sectionTitle, { color: currentColors.text }]}>КАКВО ПРАВИМ</Text>
              <View style={[styles.imageCard, { borderColor: currentColors.text }]}>
                <Image source={{ uri: marketImg }} style={styles.image} resizeMode="cover" />
              </View>
              <Text style={[styles.bodyText, { color: currentColors.text }]}>
                Ние събираме мнения, провеждаме проучвания и предлагаме конкретни, прагматични решения на наболелите въпроси. Анализираме данните от нашите анкети, за да покажем какво в действителност мисли „мълчаливото мнозинство".
              </Text>
            </View>

            <View style={styles.block}>
              <Text style={[styles.sectionTitle, { color: currentColors.text }]}>ЗАЩО СЪЩЕСТВУВАМЕ</Text>
              <Text style={[styles.bodyText, { color: currentColors.text }]}>
                Защото вярваме, че политиката не трябва да бъде сложна или корумпирана. Тя трябва да бъде инструмент за подобряване на живота на всеки българин. Съществуваме, за да върнем фокуса върху фактите, логиката и българския интерес.
              </Text>
              <Text style={[styles.bodyText, { color: currentColors.text }]}>
                Време е да спрем да се делим на „леви" и „десни" и да започнем да мислим за това какво е разумно и полезно за всички нас.
              </Text>
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
  heroTitle: { fontSize: 64, fontWeight: '900', fontFamily: 'Outfit_900Black', marginBottom: 24 },
  heroSubtitle: { fontSize: 20, lineHeight: 30, maxWidth: 800, fontFamily: 'Inter_400Regular' },
  contentSection: { paddingVertical: 96 },
  aboutGrid: { flexDirection: 'row', gap: 64 },
  sidebar: { width: 300 },
  stickyNav: { gap: 24 },
  navLink: { fontSize: 18, fontWeight: '700', fontFamily: 'Outfit_700Bold' },
  mainContent: { flex: 1 },
  block: { marginBottom: 96 },
  sectionTitle: { fontSize: 40, fontWeight: '700', fontFamily: 'Outfit_700Bold', marginBottom: 32 },
  imageCard: { borderWidth: 2, marginBottom: 32, height: 300, overflow: 'hidden' },
  image: { width: '100%', height: '100%' },
  bodyText: { fontSize: 18, lineHeight: 28, marginBottom: 24, fontFamily: 'Inter_400Regular' },
});

export default About;
