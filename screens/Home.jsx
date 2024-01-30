import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import { Avatar } from 'react-native-paper';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Search from '../components/Search';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigation();

  return (
    <>
      {/* <SafeAreaView style={{ flex: 1, backgroundColor: colors.color2 }}> */}
        <Search open={open} setOpen={setOpen} />
        <ScrollView>
          <View style={{ ...defaultStyle, flex: 1 }}>
            <Header />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 15,
              }}
            >
              <View>
                <Text style={{ fontSize: 25 }}>Our</Text>
                <Text style={{ fontSize: 25, fontWeight: '900' }}>
                  Products
                </Text>
              </View>
              <TouchableOpacity onPress={() => setOpen(true)}>
                <Avatar.Icon
                  icon="magnify"
                  style={{
                    backgroundColor: colors.color2,
                    shadowColor: '#000000',
                    shadowOffset: {
                      width: 0,
                      height: 9,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 9.22,
                    elevation: 12,
                  }}
                  color={colors.color1}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
              }}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Pressable
                  style={{ backgroundColor: '#eee', borderRadius: 20 }}
                >
                  <Text style={{ padding: 10, fontSize: 15 }}>Category</Text>
                </Pressable>

                <Pressable
                  style={{
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ padding: 10, fontSize: 15 }}>Category</Text>
                </Pressable>

                <Pressable
                  style={{
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ padding: 10, fontSize: 15 }}>Category</Text>
                </Pressable>

                <Pressable
                  style={{
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ padding: 10, fontSize: 15 }}>Category</Text>
                </Pressable>

                <Pressable
                  style={{
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ padding: 10, fontSize: 15 }}>Category</Text>
                </Pressable>

                <Pressable
                  style={{
                    backgroundColor: '#eee',
                    borderRadius: 20,
                    marginLeft: 10,
                  }}
                >
                  <Text style={{ padding: 10, fontSize: 15 }}>Category</Text>
                </Pressable>
              </ScrollView>
            </View>

            <View style={{ marginTop: 30 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Card navigate={navigate} />

                <Card navigate={navigate} />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      {/* </SafeAreaView> */}
      <Footer />
    </>
  );
};

export default Home;
