import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import Header from "../../components/Header";

function Home() {
    return(
        <Container>
            <Header title="APP Filmes"/>
            <Text>HOME</Text>
        </Container>
    )
}

export default Home;

