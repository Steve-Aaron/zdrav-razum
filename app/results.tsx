import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { Colors } from '../src/constants/Colors';
import { useTheme } from '../src/hooks/useTheme';

const Results = () => {
  const { theme } = useTheme();
  const currentColors = Colors[theme];

  const findings = [
    { title: "ЕВРОПЕЙСКИ СЪЮЗ", stat: "63.3%", label: "Отрицателно или неутрално мнение", desc: "Над две трети от анкетираните изразяват скептицизъм или резервираност към политиките на ЕС.", size: "large" },
    { title: "ПОСОКА НА СТРАНАТА", stat: "73.5%", label: "Грешна посока", desc: "Огромното мнозинство от хората не виждат правилна стратегия в управлението.", size: "small" },
    { title: "ОТНОШЕНИЕ КЪМ РУСИЯ", stat: "52.1%", label: "Положително отношение", desc: "Повече от половината българи запазват позитивни нагласи към историческите и културни връзки.", size: "small" },
    { title: "УПРАВЛЕНИЕ", stat: "60.3%", label: "Вероятно не вървим напред", desc: "Дори сред тези, които не са категорично против, скептицизмът остава висок.", size: "wide" },
  ];

  const cardSizeStyle = (size: string) => {
    switch (size) {
      case 'large': return styles.large;
      case 'small': return styles.small;
      case 'wide': return styles.wide;
      default: return styles.small;
    }
  };

  return (
    <View style={styles.page}>
      <View style={[styles.hero, { borderBottomColor: currentColors.text }]}>
        <View style={styles.container}>
          <Text style={[styles.heroTitle, { color: currentColors.text }]}>РЕЗУЛТАТИ ОТ ПРОУЧВАНИЯ</Text>
          <Text style={[styles.heroSubtitle, { color: currentColors.text }]}>Данните, които политиците често игнорират.</Text>
        </View>
      </View>

      <View style={styles.disclaimerSection}>
        <View style={styles.container}>
          <View style={[styles.disclaimerChip, { borderColor: currentColors.text, backgroundColor: currentColors.background }]}>
            <Text style={[styles.disclaimerText, { color: currentColors.text }]}>
              ВАЖНО: Тук публикуваме част от констатациите от нашите анкети, за да осигурим прозрачност и информираност.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.container}>
          <View style={styles.mosaicGrid}>
            {findings.map((finding, index) => (
              <MotiView
                key={index}
                from={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 100 }}
                style={[
                  styles.findingCard,
                  cardSizeStyle(finding.size),
                  {
                    borderColor: currentColors.text,
                    backgroundColor: finding.size === 'large' ? currentColors.text : currentColors.background,
                  },
                ]}
              >
                <View style={styles.cardHeader}>
                  <Text style={[styles.cardTag, { color: finding.size === 'large' ? currentColors.background : currentColors.text, opacity: 0.8 }]}>
                    {finding.title}
                  </Text>
                </View>
                <View>
                  <Text style={[
                    styles.cardStat,
                    { color: finding.size === 'large' ? currentColors.background : currentColors.text, fontSize: finding.size === 'large' ? 80 : 48 },
                  ]}>
                    {finding.stat}
                  </Text>
                  <Text style={[styles.cardLabel, { color: finding.size === 'large' ? currentColors.background : currentColors.text }]}>
                    {finding.label}
                  </Text>
                  <Text style={[styles.cardDesc, { color: finding.size === 'large' ? currentColors.background : currentColors.text, opacity: 0.9 }]}>
                    {finding.desc}
                  </Text>
                </View>
              </MotiView>
            ))}
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
  disclaimerSection: { paddingVertical: 32 },
  disclaimerChip: { paddingVertical: 12, paddingHorizontal: 24, borderWidth: 1, alignSelf: 'flex-start' },
  disclaimerText: { fontSize: 14 },
  section: { paddingVertical: 64 },
  mosaicGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  findingCard: { borderWidth: 2, padding: 32, justifyContent: 'space-between' },
  large: { width: '100%', flexBasis: '65%', minHeight: 400 },
  small: { flex: 1, minWidth: '30%', minHeight: 300 },
  wide: { width: '100%', minHeight: 250 },
  cardHeader: { marginBottom: 16 },
  cardTag: { fontSize: 12, fontWeight: '900', letterSpacing: 1 },
  cardStat: { fontWeight: '900', marginBottom: 8 },
  cardLabel: { fontSize: 24, fontWeight: '700', marginBottom: 16 },
  cardDesc: { fontSize: 14, lineHeight: 22 },
});

export default Results;
