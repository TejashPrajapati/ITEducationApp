import SignInScreen from "../screens/signin";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const authStack = createNativeStackNavigator({
    signin:{
        screen: SignInScreen,
    }
});

const router = createAppContainer(authStack);

export default router