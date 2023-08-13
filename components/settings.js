import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TouchableOpacity ,View,ScrollView,SafeAreaView,Switch,Image,Button,Pressable } from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import CenterFocusWeakOutlinedIcon from '@mui/icons-material/CenterFocusWeakOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigation } from '@react-navigation/native';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';










export default function SettingsScreen() {

  const navigation = useNavigation();

const navigateToLikesNComments = () => {
         navigation.navigate('LikesandShare');
}

const navigateToYourPhotos = ()  =>{
  navigation.navigate('YourPhotos');
}

const navigateToFirstPostNStories = () => {
  navigation.navigate('FirstPostNStories');
}



  const[darkModeEnabled,setDarkModeEnabled]=useState(false);
  const[wifiEnabled,setWiFiEnabled]=useState(false);
  const[followerRequestEnable,setFollowerRequestEnable]=useState(false);
  const[mentionsEnabled,setMentionsEnabled]=useState(false);
  const[accountSuggestionsEnabled,setAccountSuggestionsEnabled]=useState(false);
  const[messageRequestsEnabled,setMessageRequestsEnabled]=useState(true);
  const[messageRemindersEnabled,setMessageRemindersEnabled]=useState(false);
  const[groupRequestEnabled,setGroupRequestEnabled]=useState(false);
  const[originalAudioEnabled,setOriginalAudioEnabled]=useState(false);
  const[remixesEnabled,setRemixesEnabled]=useState(false);
 // const[recentUploadsEnabled,setRecentUploadsEnabled]=useState(false);
  const[remindersEnabled,setRemindersEnabled]=useState(false);
  const[feedbackEnabled,setFeedbackEnabled]=useState(true);
  const[supportRequestsEnabled,setSupportRequestsEnabled]=useState(false);
  const[unrecognizedLoginsEnabled,setUnrecognizedLoginsEnabled]=useState(false);

  
const handleDarkModeToggle = () => {
  setDarkModeEnabled(previousState => !previousState);
};

const handleWiFiToggle = () => {
  setWiFiEnabled(previousState => !previousState);
};

const handleFollowersToggle = () => {
  setFollowerRequestEnable(previousState => !previousState);
};

const handleMentionsToggle = () => {
  setMentionsEnabled(previousState => !previousState);
};

const handleAccountSuggestionsToggle = () => {
  setAccountSuggestionsEnabled(previousState => !previousState);
};

const handleMessageRequestsToggle = ()  =>{
  setMessageRequestsEnabled(previousState => !previousState);
};

const handleMessageRemindersToggle = () => {
   setMessageRemindersEnabled(previousState => !previousState);
};

const handleGroupRequestToggle = () => {
  setGroupRequestEnabled(previousState => !previousState);
};

const handleOriginalAudioToggle = ()  => {
  setOriginalAudioEnabled(previousState => !previousState)
};

const handleRemixesToggle = () => {
  setRemixesEnabled(previousState => !previousState);
};

// const handleRecentUploadsToggle = () => {
//   setRecentUploadsEnabled(previousState => !previousState);
// };

const handleRemindersToggle = () => {
  setRemindersEnabled(previousState => !previousState);
};

const handleFeedbackToggle = () => {
  setFeedbackEnabled(previousState => !previousState);
};

const handleSupportRequestsToggle = () => {
  setSupportRequestsEnabled(previousState => !previousState);
};

const handleUnrecognizedLoginsToggle = () => {
  setUnrecognizedLoginsEnabled(previousState => !previousState);
};




 
  return (
    <ScrollView>
      
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View> */}

      
<View style={styles.profile}>
        <View style={styles.profileAvatarWrapper}>
      <Image source={{uri:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"}}  
        style={{  width: 60,
          height: 60,
          backgroundColor: '#f8f8f8',
          borderRadius: 9999,}}

        ></Image>
        </View>
        <Text style={styles.profileName}>Jhon Doe</Text>
        <Text style={styles.profileAddress}>jhondoe123@gmail.com</Text>
        <View style={styles.btn}>
        <Pressable style={styles.button}>
      <Text style={styles.text}>Edit Profile</Text>
    </Pressable>
        </View>

      </View>
      
      <View style={styles.section} >
        
         <View style={styles.sectionHeader}>
           <Text style={styles.sectionHeaderText}>General</Text>
         </View>
       
         <View style={styles.sectionBody}>
          <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={navigateToLikesNComments}>                   
                    <View style={styles.row}>
                    <View style={styles.accountIconContainer}>
                      
                      <CenterFocusWeakOutlinedIcon />
                      
              </View>
                      <Text style={styles.rowLabel}>Security</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}>Face ID</Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22} onPress={navigateToLikesNComments}
                        />      
                      </View>
                      
           
               </TouchableOpacity>
               </View>
           </View>
           <View style={styles.rowWrapperLast}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={handleWiFiToggle}>                   
                    <View style={styles.row}>
                    <View style={styles.accountIconContainer}>
                      
                    <AccountCircleIcon />
                    
            </View>
                      <Text style={styles.rowLabel}>Account</Text>
                      <View style={styles.rowSpacer} />  

                        <Text style={styles.rowValue}>Password, Privacy</Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22} onPress={navigateToLikesNComments}
                        />      
                      </View>
                                 
               </TouchableOpacity>
               </View>
           </View>
          


           </View>
           </View>
         
           
      <View style={styles.section} >
        
         <View style={styles.sectionHeader1}>
           <Text style={styles.sectionHeaderText}>Control panel</Text>
         </View>
       
         <View style={styles.sectionBody}>
          <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={navigateToLikesNComments}>                   
                    <View style={styles.row}>
                    <View style={styles.accountIconContainer}>
                      
                      <AutoAwesomeMosaicOutlinedIcon />
                      
              </View>
                      <Text style={styles.rowLabel}>Hive</Text>
                      <View style={styles.rowSpacer} /> 
                      <Text style={styles.rowValue}>Sessions</Text>                      
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}  onPress={navigateToLikesNComments}
                          style={{ paddingRight: 7}}
                        />      
                      </View>
                      
           
               </TouchableOpacity>
               </View>
           </View>
           <View style={styles.rowWrapper}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={navigateToYourPhotos}>                   
                    <View style={styles.row}>

                    <View style={styles.accountIconContainer}>
                      
                      <DonutSmallOutlinedIcon />
                      
              </View>
                      <Text style={styles.rowLabel}>Sweat Buddy</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}>Health Tracker</Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToYourPhotos}
                          style={{ paddingRight: 7}}
                        />       
                      </View>
                                 
               </TouchableOpacity>
               </View>
           </View>
           <View style={styles.rowWrapper}>
            <View style={styles.rowFirst}>
         <TouchableOpacity  onPress={navigateToFirstPostNStories}>                   
                    <View style={styles.row}>
                    <View style={styles.accountIconContainer}>
                      
                      <NotificationsIcon/>
                      
              </View>
                      <Text style={styles.rowLabel}>Notifications</Text>
                      <View style={styles.rowSpacer} />      

                        <Text style={styles.rowValue}>Enable/Disable</Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToFirstPostNStories}
                          style={{ paddingRight: 7}}
                        />      
                      </View>          
                                </TouchableOpacity>
               </View>
           </View>



           <View style={styles.rowWrapper}>
            <View style={styles.rowFirst}>
         <TouchableOpacity  onPress={navigateToFirstPostNStories}>                   
                    <View style={styles.row}>
                    <View style={styles.accountIconContainer}>
                      
                      <MonetizationOnIcon />
                      
              </View>
                      <Text style={styles.rowLabel}>Coin System</Text>
                      <View style={styles.rowSpacer} />      

                        <Text style={styles.rowValue}>USD($)</Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToFirstPostNStories}
                          style={{ paddingRight: 7}}
                        />      
                      </View>          
                                </TouchableOpacity>
               </View>
           </View>


           <View style={styles.rowWrapper}>
            <View style={styles.rowFirst}>
         <TouchableOpacity  onPress={navigateToFirstPostNStories}>                   
                    <View style={styles.row}>
                    <View style={styles.accountIconContainer1}>
                      <QuestionAnswerOutlinedIcon/>
                    <Icon 
                     color="#121212"
                     name="messenger"/>
                      
              </View>  
                    
                      <Text style={styles.rowLabel}>Messenger</Text>
                      <View style={styles.rowSpacer} />      

                        <Text style={styles.rowValue}></Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToFirstPostNStories}
                          style={{ paddingRight: 7}}
                        />      
                      </View>          
                                </TouchableOpacity>
               </View>
           </View>
           <View style={styles.rowWrapperLast}>
            <View style={styles.rowFirst}>
         <TouchableOpacity  onPress={navigateToFirstPostNStories}>                   
                    <View style={styles.row}>
                    <View style={styles.accountIconContainer}>
                      
                      <AccessTimeFilledIcon />
                      
              </View>
                      <Text style={styles.rowLabel}>Engagements</Text>
                      <View style={styles.rowSpacer} />      

                        <Text style={styles.rowValue}>Time Spent</Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToFirstPostNStories}
                          style={{ paddingRight: 7}}
                        />      
                      </View>          
                                </TouchableOpacity>
               </View>
           </View>


           </View>
           </View>
         











           <View style={styles.section} >
        
        <View style={styles.sectionHeader1}>
          <Text style={styles.sectionHeaderText}>More</Text>
        </View>
      
        <View style={styles.sectionBody}>
        <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={handleFollowersToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>About Us</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToFirstPostNStories}
                          style={{ paddingRight: 7}}
                        />          
                      </View>
                                 
               </TouchableOpacity>
               </View>
           </View>
          <View style={styles.rowWrapper}>
           <View style={styles.rowFirst}>
           <TouchableOpacity onPress={handleMentionsToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Privacy Policy</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToFirstPostNStories}
                          style={{ paddingRight: 7}}
                        />          
                      </View>
                                 
               </TouchableOpacity>
              </View>
          </View>
          <View style={styles.rowWrapperLast}>
           <View style={styles.rowFirst}>
           <TouchableOpacity onPress={handleAccountSuggestionsToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Terms & Conditions</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToFirstPostNStories}
                          style={{ paddingRight: 7}}
                        />          
                      </View>
                                 
                 
            </TouchableOpacity>
              </View>
          </View>


          </View>
          </View>
     





         
     
   </SafeAreaView>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    
     backgroundColor: '#121212',
    paddingVertical: 20,
    
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 13,
    borderRadius: 15,
    borderLeftWidth:0.5,
    borderTopWidth:0.5,
    borderBottomWidth:0.5,
    borderColor:'#595959',
    elevation: 3,
    backgroundColor: '#262626',
   
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight:'500',
    letterSpacing: 0.25,
    color: 'white',
  },
 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f1f1f',
  },
  section: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  subSection:{
    
    paddingVertical: 0,
  },
  sectionHeader: {
    padding: 8,
    paddingTop:10,
    paddingLeft: 12,
  },
  sectionHeader1: {
    
    padding: 8,
    paddingLeft: 12,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    fontWeight: '500',
    color: 'white',
    textTransform: 'none',
    letterSpacing:0.2,
  },
  
  sectionBody: {
    borderRadius: 12,
      shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profile: {
    marginTop:15,
    padding: 12,
    backgroundColor: '#121212',
    borderBottomWidth:0,
    borderColor:'#121212',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
 
  profileAvatar: {
    position:'relative'
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#858585',
  },

  profileAddress:{
    marginTop:5,
    fontSize:16,
    color:'#858585',
    textAlign:'center',
  },
  
  
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#858585',
  },
  
  
  rowLabel: {
    fontSize: 17.6,
    color: '#ffffff',
   fontStyle:'normal',
    
   },
  rowValue: {
    fontSize: 14,
    color: '#ababab',
    letterSpacing:0.5,
  },
  btn:{
    marginTop:10,
    
  },
  

  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowWrapper: {
   paddingLeft:15,
   borderTopWidth:0,
   borderRadius:1,
   borderColor: '#4C4C4C',
   borderRightWidth: 1.2,
   borderLeftWidth: 1.2,
   borderRightWidth: 1.2,
   backgroundColor:'#262626',
   borderBottomWidth: 0,
    
  },
  rowWrapperFirst: {
    paddingLeft:15,
    borderTopWidth:1.2,    
    borderColor: '#4C4C4C',
    backgroundColor:'#262626',
    borderBottomWidth: 0, 
    borderLeftWidth: 1.2,
    borderRightWidth: 1.2,
    borderTopLeftRadius:18,
    borderTopRightRadius:18,
   },

   accountIcon: {
    marginLeft:0,
    marginRight: 10,
  },
  accountIconContainer: {
   color:'#666666',
   marginRight: 8,
   alignItems:'center',
    
   
},
accountIconContainer1: {
  color:'#666666',
  marginRight: 8,
  alignItems:'baseline',
  justifyContent:'center',
   
  
},
   rowWrapperLast: {
    paddingLeft:12,
    borderTopWidth:0,    
    borderColor: '#4C4C4C',
    backgroundColor:'#262626',
    borderBottomWidth: 1.2, 
    borderLeftWidth: 1.2,
    borderRightWidth: 1.2,
    borderBottomLeftRadius:18,
    borderBottomRightRadius:18,
   },
  row: {
    height:58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 13,
    paddingRight: 12,
    paddingBottom: 13,
    paddingLeft: 0,
    
    
    
    
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  }
  
);
  

