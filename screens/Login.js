import React from 'react';
import { Dimensions, Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import Home from '../screens/Plans';
const {width, height} = Dimensions.get('window');

export default class Login extends React.Component{
    state = {
        email: '',
        password:'',
        login:true,
    }

    componentDidMount = () =>{
        var firebaseConfig = {
            apiKey: "AIzaSyBf9ukz7Uj5Vmqsy86uLXfLhC4Dz99d6tQ",
            authDomain: "haber-app-80634.firebaseapp.com",
            databaseURL: "https://haber-app-80634.firebaseio.com",
            projectId: "haber-app-80634",
            storageBucket: "haber-app-80634.appspot.com",
            messagingSenderId: "680426514089",
            appId: "1:680426514089:web:e21a58f25f8f99f6452bb8",
            measurementId: "G-DH3YG0GJ77"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
      
          firebase.auth().onAuthStateChanged(auth => {
            if(auth) {
              console.log('Giriş Yapıldı.');
            }else{
                this.setState({ login: false });
                console.log('Giriş Yapılmadı.');
            }
          });
    }

    girisYap = () => {
        this.setState({ login: true });

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            //giriş başarılı
            this.props.navigation.navigate('Home');
        }).catch((err) => {
            this.setState({ login: false });
            Alert.alert(
                'Oops',
                'Giriş Yapılamadı. Lütfen tekrar deneyiniz.',
                [
                    { text: 'Tamam' }
                ]
            )
        })
    }

    render(){
        //const {navigate} = this.props.navigation
        return(
            //<Layout navigation={navigation} bold title="NoPaper">
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image source ={require('../images/image.jpg')}
                    style={{width:"100%",height:"43%"}}
                />
                <Text
                    style={{
                        fontSize:30,
                        alignSelf:"center",
                    }}
                >Save the world</Text>
                <Text
                    style={{
                        marginHorizontal:55,
                        textAlign:'center',
                        marginTop:5,
                        opacity:0.4
                    }}
                >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color="#00716F" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                        placeholder="Email"
                        value={this.state.email}
                        keyboardType='email-address'
                        onChangeText={email=>this.setState( { email: email})}
                    />
                </View>


                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="lock" color="#00716F" size={24}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                        placeholder="Password"
                        value={this.state.password}
                        secureTextEntry
                        onChangeText={password=>this.setState( { password: password})}
                    />

                </View>



               
                    <TouchableOpacity onPress={() => this.girisYap()}>
                        <View style={{
                            marginHorizontal:55,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:30,
                            backgroundColor:"#00716F",
                            paddingVertical:10,
                            borderRadius:23
                        }}>
                            <Text style={{
                                color:"white"
                            }}>Already a member</Text>  
                        </View>
                    </TouchableOpacity>
                   
                
                <Text 
                    onPress={() => {
						this.props.navigation.navigate('SecondScreen');
					}}
                
                    style={{
                        alignSelf:"center",
                        color:"#00716F",
                        paddingVertical:30
                    }}>New User
                </Text>
            </View>
            //</Layout>
        )
    }



}
