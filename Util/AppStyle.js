import {StyleSheet} from 'react-native';
import Colors from './AppColors';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ViewLogo: {
        flex: 0.3,
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent:'center',
        paddingTop:50
    },
    ViewText: {
        flex: 0.7,
        backgroundColor: Colors.blue,
        alignItems: 'center',
        justifyContent: 'center',
    },
    View15:{
        width: '100%',
        height: '15%',
        paddingHorizontal: 20,
        paddingVertical:20,
        backgroundColor:Colors.blue,
        flexDirection: "row",
        alignItems:'center',
    },
    View20:{
        width: '100%',
        height: '20%',
        paddingHorizontal: 20,
        paddingVertical:20,
        backgroundColor:Colors.blue,
        flexDirection: "row",
        alignItems:'center'
    },
    View80:{
        width: '100%',
        height: '80%',
        paddingHorizontal: 20,
        paddingVertical:20,
        backgroundColor:Colors.low_grey,
    },
    View85:{
        width: '100%',
        height: '85%',
        paddingHorizontal: 20,
        paddingVertical:20,
        backgroundColor:Colors.low_grey,
    },
    ViewForWinAndLose85:{
        width: '100%',
        height: '85%',
        paddingHorizontal: 20,
        paddingVertical:20,
        backgroundColor:Colors.low_grey,
        alignItems:'center',
        justifyContent: 'center',

    },
    ViewLogoForWin: {
        flex: 0.3,
        backgroundColor: Colors.green_for_win,
        alignItems: 'center',
        justifyContent:'center',
        paddingTop:50,
        alignItems:'flex-end',
       marginTop:23,
       marginRight:10
    },
    ViewForWin15:{
        width: '100%',
        height: '15%',
        backgroundColor:Colors.green_for_win,
    },
    ViewLogoForLose: {
        flex: 0.3,
        backgroundColor: Colors.red_for_lose,
        alignItems: 'center',
        justifyContent:'center',
        paddingTop:50,
        alignItems:'flex-end',
       marginTop:23,
       marginRight:10
    },
    ViewForLose15:{
        width: '100%',
        height: '15%',
        backgroundColor:Colors.red_for_lose,
    },

    ImageContainer:{
        width:281,
        height:443,
    },
    ImageLogo:{
        width:105,
        height:100,
        alignItems:'center',
    },
    ImageLogoForQuiz:{
        width:75,
        height:75,
        alignItems:'center',
    },
    ImageForWinAndLose:{
        width:295,
        height:358,
    },
    ButtonQuestion:{
        width:'100%',
        backgroundColor: Colors.white,
        padding:15,
        borderRadius:12,
        marginBottom:12,
        shadowColor: Colors.black,
        shadowOpacity: 0.1,
        shadowOffset: {width:0, height:3},
        shadowRadius: 2, 
        elevation: 5,
    },
    ButtonCategories:{
        width:'100%',
        backgroundColor: Colors.white,
        padding:15,
        borderRadius:12,
        marginBottom:12,
        shadowColor: Colors.black,
        shadowOpacity: 0.1,
        shadowOffset: {width:0, height:3},
        shadowRadius: 2, 
        elevation: 5,
        textAlign:'center'
    },
    ButtonContainer:{
        margin:30,
        width:260,
        height:70,
        borderRadius:10,
        backgroundColor:Colors.white,
        alignItems:'center',
        justifyContent:'center',
    },
    ButtonContainerForLose:{
        margin:30,
        width:260,
        height:70,
        borderRadius:15,
        borderWidth: 5,
        borderColor: Colors.red_for_lose,
        backgroundColor:Colors.white,
        alignItems:'center',
        justifyContent:'center',
    },
    ButtonContainerForWin:{
        margin:30,
        width:260,
        height:70,
        borderRadius:15,
        borderWidth: 5,
        borderColor: Colors.green_for_win,
        backgroundColor:Colors.white,
        alignItems:'center',
        justifyContent:'center',
    },
    FontContainer:
    {
        fontSize:45,
        fontWeight:'bold',
        color:Colors.gray_text,
    },
    FontTitle:
    {
        paddingTop:30,
        fontSize:35,
        color:Colors.white,
    },
    FontForQuestions:
    {
        padding:20,
        fontSize:25,
        color:Colors.black,
    },
    FontForWin:
    {
        fontSize:60,
        color:Colors.green_for_win,
        fontWeight:'bold',
        textAlign:'center',
    },
    FontForLose:
    {
        fontSize:60,
        color:Colors.red_for_lose,
        fontWeight:'bold',
        textAlign:'center',
    },
    FontForResult:
    {
        padding:20,
        fontSize:25,
        textAlign:'center',
        marginTop:300,
    },

    FontForAnswers:
    {
        padding:20,
        fontSize:15,
        color:Colors.black,
    },
    FontCategories:
    {
        fontSize:30,
        color:Colors.gray_text,
        textAlign:'center'
    },
    timerStyle:{
        backgroundColor: Colors.white,
        borderRadius: 100,
         borderWidth: 2,
        borderColor: Colors.blue,
    }


        

});