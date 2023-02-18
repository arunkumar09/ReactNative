import { ScrollView, Card, Text } from "react-native";

const ContactScreen = () => {
    return ( 
        <ScrollView>
            <Card wrapperStyle={{margin: 20}}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider />
                <Text style={{marginBottom: 10}}>
                            1 Nucamp Way 
                            Seattle, WA 98001 
                            U.S.A.

                            Phone: 1-206-555-1234
                            Email: campsites@nucamp.co
                </Text>
            </Card>
        </ScrollView>
     );
}
 
export default ContactScreen;