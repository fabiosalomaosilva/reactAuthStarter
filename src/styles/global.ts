import {StyleSheet} from 'react-native';
import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerCenter: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    margin: metrics.doubleBaseMargin,
  },
  sectionTitle: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: fonts.regular,
    alignSelf: 'center',
    marginBottom: metrics.doubleBaseMargin,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: colors.border,
    borderWidth: 1,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    fontSize: 16,
    marginTop: 15,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  botao: {
    backgroundColor: colors.primary,
    marginTop: 15,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 20,
    height: 40,
    borderRadius: 20,
  },
  label: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  LabelLarge: {
    color: colors.primary,
    textAlign: 'center',
    fontSize: 18,
  },
  link: {
    color: colors.primaryDark,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
});

export default styles;
