import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native';
import { Colors } from '../src/constants/Colors';
import { useTheme } from '../src/hooks/useTheme';

const Contact = () => {
  const { theme } = useTheme();
  const currentColors = Colors[theme];

  return (
    <View style={styles.page}>
      <View style={[styles.hero, { borderBottomColor: currentColors.text }]}>
        <View style={styles.container}>
          <Text style={[styles.heroTitle, { color: currentColors.text }]}>СВЪРЖЕТЕ СЕ С НАС</Text>
          <Text style={[styles.heroSubtitle, { color: currentColors.text }]}>Здравият разум изисква диалог.</Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={[styles.container, styles.contactGrid]}>
          <View style={styles.formColumn}>
            <View style={[styles.card, { borderColor: currentColors.text }]}>
              <View style={styles.formGroup}>
                <Text style={[styles.label, { color: currentColors.text }]}>ИМЕ</Text>
                <TextInput 
                  style={[styles.input, { borderColor: currentColors.text, color: currentColors.text, backgroundColor: currentColors.background }]} 
                  placeholder="Вашето име..." 
                  placeholderTextColor="#666"
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={[styles.label, { color: currentColors.text }]}>ИМЕЙЛ</Text>
                <TextInput 
                  style={[styles.input, { borderColor: currentColors.text, color: currentColors.text, backgroundColor: currentColors.background }]} 
                  placeholder="example@mail.bg" 
                  keyboardType="email-address"
                  placeholderTextColor="#666"
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={[styles.label, { color: currentColors.text }]}>СЪОБЩЕНИЕ</Text>
                <TextInput 
                  style={[styles.input, styles.textArea, { borderColor: currentColors.text, color: currentColors.text, backgroundColor: currentColors.background }]} 
                  placeholder="Вашето съобщение тук..." 
                  multiline 
                  numberOfLines={5}
                  placeholderTextColor="#666"
                />
              </View>
              <Pressable style={[styles.submitButton, { backgroundColor: currentColors.text }]}>
                <Text style={[styles.submitText, { color: currentColors.background }]}>ИЗПРАТИ</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.infoColumn}>
            <Text style={[styles.sectionTitle, { color: currentColors.text }]}>СПОДЕЛЕТЕ ВАШЕТО МНЕНИЕ</Text>
            <Text style={[styles.bodyText, { color: currentColors.text }]}>
              Свържете се с нас, ако имате възгледи, които смятате за здрав разум, но хората не ги признават. Вашите идеи са важни за нас.
            </Text>
            <Text style={[styles.bodyText, { color: currentColors.text }]}>
              Имате ли въпроси или коментари относно нашите проучвания или политики? Ние сме тук, за да чуем какво мислите.
            </Text>
            
            <View style={styles.infoList}>
              <Text style={[styles.infoItem, { color: currentColors.text }]}><Text style={{ fontWeight: '900' }}>Имейл:</Text> contact@zdrav-razum.com</Text>
              <Text style={[styles.infoItem, { color: currentColors.text }]}><Text style={{ fontWeight: '900' }}>Социални мрежи:</Text> @zdravrazumbg</Text>
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
  heroTitle: { fontSize: 56, fontWeight: '900', fontFamily: 'Outfit_900Black' },
  heroSubtitle: { fontSize: 20, marginTop: 16, fontFamily: 'Inter_400Regular' },
  section: { paddingVertical: 96 },
  contactGrid: { flexDirection: 'row', gap: 64 },
  formColumn: { flex: 1 },
  infoColumn: { flex: 1 },
  card: { padding: 40, borderWidth: 2 },
  formGroup: { marginBottom: 24 },
  label: { fontSize: 14, fontWeight: '900', marginBottom: 8 },
  input: { borderWidth: 2, padding: 16, fontSize: 16 },
  textArea: { height: 150, textAlignVertical: 'top' },
  submitButton: { paddingVertical: 16, alignItems: 'center' },
  submitText: { fontWeight: '900', fontSize: 16 },
  sectionTitle: { fontSize: 32, fontWeight: '900', marginBottom: 32 },
  bodyText: { fontSize: 18, lineHeight: 28, marginBottom: 24 },
  infoList: { marginTop: 32, borderTopWidth: 1, borderTopColor: '#e5e4d7', paddingTop: 32 },
  infoItem: { fontSize: 16, marginBottom: 8 }
});

export default Contact;
